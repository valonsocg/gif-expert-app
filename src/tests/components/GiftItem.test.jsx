import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { describe } from "vitest";
import { GiftItem } from "../../components";
import { expect } from "vitest";

describe("testing <GiftItem />", () => {
  const title = "One Punch";
  const url = "https://www/one-punch.com/one.jpg";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    // console.log(screen.getByRole("img").alt);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GiftItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
