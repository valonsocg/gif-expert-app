import { test } from "vitest";
import { describe } from "vitest";
import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";
import { expect } from "vitest";

describe("pruebas en hook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("one punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de regresar un array de images y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("one punch"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
