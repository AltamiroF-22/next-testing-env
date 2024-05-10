import Button from "@/app/button/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it('Should have "Click me" in the button', () => {
    render(<Button />);

    const button = screen.getByRole("button", { name: "+" });

    expect(button).toBeInTheDocument();
  });

  it("Should increase the value when the button was clicked", () => {
    render(<Button />);

    const h2 = screen.getByRole("heading");
    const button = screen.getByRole("button", { name: "+" });
    fireEvent.click(button);
    expect(h2).toHaveTextContent("1");
  });

  it("Should decrease the value when the button was clicked", () => {
    render(<Button />);

    const h2 = screen.getByRole("heading");
    const button = screen.getByRole("button", { name: "-" });
    fireEvent.click(button);
    expect(h2).toHaveTextContent("0");
  });
});
