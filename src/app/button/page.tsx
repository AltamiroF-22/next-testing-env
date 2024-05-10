"use client";
import { ButtonComponent } from "@/components/Button";
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = (): void => {
    if (count === 99) return;
    setCount((count) => count + 1);
  };

  const handleDecrease = (): void => {
    if (count === 0) return;
    setCount((count) => count - 1);
  };

  return (
    <main className="min-h-dvh grid place-content-center bg-slate-950">
      <section className="min-w-60 flex items-center justify-center gap-1">
        <ButtonComponent onClick={handleDecrease} value="-" />
        <h2 className="border p-3 w-11 text-center rounded-md">{count}</h2>
        <ButtonComponent onClick={handleIncrease} value="+" />
      </section>
    </main>
  );
}
