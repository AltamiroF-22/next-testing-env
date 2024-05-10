import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);
    const myElement = screen.getByText("Docs");

    expect(myElement).toBeInTheDocument();
  });

  it("should contain the text 'information' ", () => {
    render(<Home />);
    const myElement = screen.getByText(/information/i);

    expect(myElement).toBeInTheDocument();
  });

  it("should have a heading ", () => {
    render(<Home />);

    const myElement = screen.getByRole("heading", { name: /learn/i });

    expect(myElement).toBeInTheDocument();
  });
});
