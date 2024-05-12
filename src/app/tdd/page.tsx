"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoProps } from "@/interfaces/todos";
import { v4 as uuid } from "uuid";
import { ButtonComponent } from "@/components/Button";

export default function Todos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setFocus,
  } = useForm<{ title: string }>();

  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleAddTasks = (data: { title: string }) => {
    setTodos((prev) => [
      ...prev,
      { title: data.title, status: false, id: uuid() },
    ]);
    resetField("title");
    setFocus("title");
  };

  return (
    <div className="w-screen min-h-screen bg-gray-950 flex justify-center items-start pt-10">
      <div className="p-4 bg-slate-500 rounded-2xl m-10">
        <h1 className="text-center mb-4">Minhas tarefas</h1>
        <div className="flex gap-5">
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Digite o nome da tarefa"
            className="rounded-lg p-3 min-w-96 bg-gray-800 text-gray-100 outline-none border"
          />
          <ButtonComponent
            onClick={() => handleSubmit(handleAddTasks)()}
            value="Adicionar tarefa"
          />
        </div>
        <ul className="flex flex-col gap-3 mt-4">
          {todos.map((todo) => (
            <div
              className="w-full border rounded flex justify-between items-center p-4 "
              key={todo.id}
            >
              <li className="">{todo.title}</li>
              <span
                className={`p-1 w-6 h-6 rounded-full ${
                  todo.status ? "bg-green-500" : "bg-red-600"
                } `}
              ></span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
