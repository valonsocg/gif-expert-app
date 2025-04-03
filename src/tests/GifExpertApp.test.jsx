import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "vitest";
import GifExpertApp from "../GifExpertApp";
import { test } from "vitest";
import { expect } from "vitest";

describe("pruebas en <GifExpertApp/>", () => {
  test("debe renderizar categorias iniciales", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("one punch")).toBeTruthy();
  });

  test("debe anadir una nueva categoria cuando onAddCategory es llamada", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "dragon ball" } });
    fireEvent.submit(form);

    expect(screen.getByText("dragon ball"));
  });

  test("no debe anadir una categoria duplicada", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "one punch" } });
    fireEvent.submit(form);

    const categories = screen.getAllByRole("heading", { level: 3 });

    expect(categories.length).toBe(1);
  });
});
