import { Sun } from "lucide-react";
import { Link } from "./link";
import { links, LinkProvider } from "../contexts/link-context";

export function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 flex flex-col gap-4 sm:flex-row">
      <LinkProvider>
        {links.map(link => (
          <Link link={link} />
        ))}
      </LinkProvider>

      <div className="flex gap-1 sm:mr-0 sm:ml-auto cursor-pointer">
        <Sun color="#d1d5db" />
        <p className="text-gray-300">Light</p>
      </div>
    </nav>
  );
}
