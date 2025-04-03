import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatically clean up the DOM after each test
afterEach(() => {
  cleanup();
});
