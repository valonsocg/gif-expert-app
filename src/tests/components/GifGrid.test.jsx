import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { describe } from "vitest";
import GifGrid from "../../components/GifGrid";
import { expect } from "vitest";
import { vitest } from "vitest";
import useFetchGifs from "../../hooks/useFetchGifs";

vitest.mock("../../hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "one punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("one punch"));
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "saitama",
        url: "https://saitama/saitama.jpg",
      },
      {
        id: "cbd",
        title: "goku",
        url: "https://goku/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
