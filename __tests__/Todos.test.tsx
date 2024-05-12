// Importa o componente Todos da página de teste
import Todos from "@/app/tdd/page";
// Importa funções e métodos úteis para realizar testes
import { render, screen, fireEvent } from "@testing-library/react";
// Importa userEvent para simular eventos de usuário
import userEvent from "@testing-library/user-event";

// Descreve o conjunto de testes para o componente Todos
describe("Todos", () => {
  // Testa se a mensagem "Minhas tarefas" está sendo exibida corretamente
  it("Should show My tasks message", () => {
    // Renderiza o componente Todos
    render(<Todos />);
    // Seleciona o elemento que contém o texto "Minhas tarefas"
    const myElement = screen.getByText(/Minhas tarefas/i);
    // Verifica se o elemento está no documento (DOM)
    expect(myElement).toBeInTheDocument();
  });

  // Testa se o campo de entrada para adicionar tarefas está sendo exibido corretamente
  it("Should show task input", () => {
    // Renderiza o componente Todos
    render(<Todos />);
    // Seleciona o campo de entrada pelo atributo placeholder
    const input = screen.getByPlaceholderText(/Digite o nome da tarefa/i);
    // Verifica se o campo de entrada está no documento (DOM)
    expect(input).toBeInTheDocument();
  });

  // Testa se o botão de adicionar tarefa está sendo exibido corretamente
  it("Should show add button", () => {
    // Renderiza o componente Todos
    render(<Todos />);
    // Seleciona o botão pelo papel (role) e pelo nome
    const button = screen.getByRole("button", { name: /Adicionar tarefa/i });
    // Verifica se o botão está no documento (DOM)
    expect(button).toBeInTheDocument();
  });

  // Testa se uma tarefa é adicionada corretamente ao clicar no botão de adicionar
  it("Should add task on click", async () => {
    // Renderiza o componente Todos
    render(<Todos />);
    // Seleciona o campo de entrada pelo atributo placeholder
    const input = screen.getByPlaceholderText(/Digite o nome da tarefa/i);
    // Define o título da tarefa
    const taskTitle = "Nova tarefa";
    // Simula a digitação do título da tarefa no campo de entrada
    await userEvent.type(input, taskTitle);
    // Verifica se o valor digitado está sendo exibido corretamente no campo de entrada
    screen.getByDisplayValue(taskTitle);
    // Seleciona o botão de adicionar tarefa pelo papel (role) e pelo nome
    const button = screen.getByRole("button", { name: /Adicionar tarefa/i });
    // Simula o clique no botão de adicionar tarefa
    await userEvent.click(button);
    // Verifica se o campo de entrada está vazio após adicionar a tarefa
    screen.getByPlaceholderText(/Digite o nome da tarefa/i);
    // Verifica se o título da tarefa adicionada está sendo exibido corretamente
    screen.getByText(taskTitle);
  });
});
