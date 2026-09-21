import { PocketIc } from "@dfinity/pic";
import { afterAll, beforeAll, expect, it } from "vitest";

import { idlFactory } from "../../src/frontend/src/declarations/backend.did.js";
import type { _SERVICE } from "../../src/frontend/src/declarations/backend.did";

const PIC_URL = process.env.POCKET_IC_URL ?? "";
const BACKEND_WASM = process.env.BACKEND_WASM ?? "";

let pic: PocketIc | undefined;
let actor: _SERVICE;
let canisterId: unknown;

beforeAll(async () => {
  pic = await PocketIc.create(PIC_URL);
  ({ actor, canisterId } = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BACKEND_WASM }));
});

afterAll(async () => {
  await pic?.tearDown();
});

it("answers an empty-state read instead of trapping", async () => {
  await expect(actor.schema()).resolves.toBeTypeOf("string");
});

it("reports the caller role without trapping", async () => {
  await expect(actor.getCallerUserRole()).resolves.toBeDefined();
});

it("reports admin status without trapping", async () => {
  await expect(actor.isCallerAdmin()).resolves.toBeTypeOf("boolean");
});

it("rejects an invalid query instead of hanging", async () => {
  // The backend exposes no domain entities, so there is no valid OQL query to
  // run; the observable contract is that malformed input is rejected rather
  // than hanging the caller.
  await expect(actor.execute("")).rejects.toThrow();
});

it("initializes access control without trapping", async () => {
  await expect(actor._initialize_access_control()).resolves.toBeNull();
});

it("rejects role assignment from a non-admin caller", async () => {
  // The backend guards role assignment behind admin authorization; a caller
  // that is not an admin is rejected rather than silently granted a role.
  await expect(actor.assignCallerUserRole(canisterId as never, { user: null })).rejects.toThrow(
    /Unauthorized/i,
  );
});

it("starts an internet identity sign-in without trapping", async () => {
  await expect(actor._internet_identity_sign_in_start()).resolves.toBeInstanceOf(Uint8Array);
});
