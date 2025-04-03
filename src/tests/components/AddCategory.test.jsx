import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "vitest";
import AddCategory from "../../components/AddCategory";
import { test } from "vitest";
import { expect } from "vitest";
import { vitest } from "vitest";

describe("pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = vitest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = vitest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
