import { Link } from "./link";
import { links, LinkProvider } from "../contexts/link-context";
import { ButtonTheme } from "./button-theme";

export function Navbar() {

  
  return (
    <nav className="bg-sky-800 dark:bg-slate-900 p-4 flex flex-col gap-4 sm:flex-row">
      <LinkProvider>
        {links.map(link => (
          <Link link={link} />
        ))}
      </LinkProvider>

      <ButtonTheme />
    </nav>
  );
}
