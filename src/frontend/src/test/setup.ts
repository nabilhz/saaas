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
