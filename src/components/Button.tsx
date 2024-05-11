interface ButtonProps {
  onClick: () => void;
  value: string;
}

export function ButtonComponent({ onClick, value }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 min-w-11 select-none duration-100 bg-white text-slate-950 font-bold border-slate-400 hover:bg-gray-500 hover:text-slate-200 border rounded-md"
    >
      {value}
    </button>
  );
}
