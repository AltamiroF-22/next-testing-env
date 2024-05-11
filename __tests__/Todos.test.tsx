import Todos from "@/app/tdd/page";
import { render, screen } from "@testing-library/react";

describe("Todos", () => {
  it("Should show My tasks message", () => {
    render(<Todos />);
    const myElement = screen.getByText("Minhas tarefas");
    expect(myElement).toBeInTheDocument();
  });

  it("Should show task input", () => {
    render(<Todos />);
    const input = screen.getByPlaceholderText("Digite o nome da tarefa");
    expect(input).toBeInTheDocument();
  });

  it("Should show add button", () => {
    render(<Todos />);
    const button = screen.getByRole("button", { name: "Adicionar tarefa" });
    expect(button).toBeInTheDocument();
  });
});
