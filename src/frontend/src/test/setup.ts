import "@testing-library/jest-dom/vitest";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-ocid" });

// framer-motion's `whileInView` feature uses IntersectionObserver, which jsdom
// does not implement. Provide a minimal no-op so pages using scroll-triggered
// animations render in tests.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [];

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ??
  (MockIntersectionObserver as unknown as typeof IntersectionObserver);

// Radix UI popper-based components (dropdown menus, popovers, tooltips) measure
// their content with ResizeObserver, which jsdom does not implement. Without a
// no-op the menu content throws while mounting and never appears.
class MockResizeObserver implements ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

globalThis.ResizeObserver =
  globalThis.ResizeObserver ??
  (MockResizeObserver as unknown as typeof ResizeObserver);

// Radix menu items call these DOM APIs during keyboard/pointer interaction;
// jsdom does not implement them.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}
if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}

// jsdom does not implement PointerEvent. Without it, fireEvent.pointerDown
// falls back to a plain Event that drops `button`/`ctrlKey`, and Radix's
// dropdown trigger (which opens only for a primary-button pointerdown) never
// opens. A MouseEvent subclass carries those properties through.
if (typeof globalThis.PointerEvent === "undefined") {
  class MockPointerEvent extends MouseEvent {
    readonly pointerId: number;
    readonly pointerType: string;
    readonly isPrimary: boolean;
    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params);
      this.pointerId = params.pointerId ?? 1;
      this.pointerType = params.pointerType ?? "mouse";
      this.isPrimary = params.isPrimary ?? true;
    }
  }
  globalThis.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent;
}
