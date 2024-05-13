// Importa o componente Todos da página de teste
import Todos from "@/app/tdd/page";
// Importa funções e métodos úteis para realizar testes
import { render, screen } from "@testing-library/react";
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
    const button = screen.getByRole("button", { name: /Adicionar/i });
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
    const button = screen.getByRole("button", { name: /Adicionar/i });
    // Simula o clique no botão de adicionar tarefa
    await userEvent.click(button);
    // Verifica se o campo de entrada está vazio após adicionar a tarefa
    screen.getByPlaceholderText(/Digite o nome da tarefa/i);
    // Verifica se o título da tarefa adicionada está sendo exibido corretamente
    expect(screen.getAllByText(taskTitle)).toHaveLength(1);
  });

  it("Should delete task on delete click", async () => {
    // Adiciona tarefa para deletar
    render(<Todos />);

    const input = screen.getByPlaceholderText(/Digite o nome da tarefa/i);

    const taskTitle = "Nova tarefa";

    await userEvent.type(input, taskTitle);

    screen.getByDisplayValue(taskTitle);

    const button = screen.getByRole("button", { name: /Adicionar/i });

    await userEvent.click(button);

    //deleta tarefa
    const deleteBtn = screen.getByRole("button", { name: /deletar/i });

    await userEvent.click(deleteBtn);

    expect(screen.queryByText(taskTitle)).not.toBeInTheDocument();
  });

  it("Should edit task on edit click", async () => {
    // Adiciona tarefa para editar
    render(<Todos />);

    const input = screen.getByPlaceholderText(/Digite o nome da tarefa/i);

    const taskTitle = "Nova tarefa";

    await userEvent.type(input, taskTitle);

    screen.getByDisplayValue(taskTitle);

    const addButton = screen.getByRole("button", { name: /Adicionar/i });

    await userEvent.click(addButton);

    // Seleciona o botão de edição da tarefa adicionada
    const editBtn = screen.getByRole("button", { name: /editar/i });

    await userEvent.click(editBtn);

    // Seleciona o campo de entrada para editar o título da tarefa
    const editInput = screen.getByDisplayValue(taskTitle);

    const editedTask = "Task editada";

    // Simula a edição do título da tarefa
    await userEvent.clear(editInput);
    await userEvent.type(editInput, editedTask);

    // Clica no botão de adicionar tarefa para salvar a edição
    await userEvent.click(addButton);

    // Verifica se a tarefa editada está sendo exibida corretamente
    expect(screen.getByText(editedTask)).toBeInTheDocument();
    expect(screen.queryByText(taskTitle)).not.toBeInTheDocument();
  });
});
