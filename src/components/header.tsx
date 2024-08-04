import { Input } from "./input";

export function Header() {
  return (
    <header className="bg-sky-800 dark:bg-slate-900 border-b border-cyan-400 flex flex-col items-start p-4 gap-4 sm:flex-row sm:justify-between sm:items-center">
      <h1 className="font-semibold text-5xl text-cyan-400">FastNews</h1>
      <Input />
    </header>
  );
}
