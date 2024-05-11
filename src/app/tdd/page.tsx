"use client"

import { ButtonComponent } from "@/components/Button";

export default function Todos() {
  return (
    <div className="w-screen h-screen bg-gray-950 grid place-content-center">
      <div className="p-4 bg-slate-500 rounded-2xl">
        <h1 className="text-center mb-4">Minhas tarefas</h1>
       <div className="flex gap-5">
       <input
          type="text"
          placeholder="Digite o nome da tarefa"
          className="rounded-lg p-3 min-w-96 bg-gray-800 text-gray-100 outline-none border"
        />
        <ButtonComponent onClick={()=> console.log(2)} value="Adicionar tarefa"/>
       </div>
      </div>
    </div>
  );
}
