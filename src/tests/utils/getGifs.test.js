import { test } from "vitest";
import { describe } from "vitest";
import { getGifs } from "../../utils/getGifs";
import { expect } from "vitest";

describe("pruebas en getGifs.js", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("one punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
