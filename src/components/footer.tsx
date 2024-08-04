import { Github, Globe, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sky-800 dark:bg-slate-900 p-4 space-y-2">
      <h1 className="w-full text-center text-2xl font-medium text-gray-300">Fastnews</h1>
      <div className="flex justify-center gap-4">
        <a href="https://jose-henrique-araujo-da-silva.vercel.app/" target="_blank" title="personal website">
          <Globe color="#d1d5db" />
        </a>
        <a href="https://github.com/JoseHenrique1" target="_blank">
          <Github color="#d1d5db" />
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-araujo-da-silva-43970a274/" target="_blank">
          <Linkedin color="#d1d5db" />
        </a>
        <a href="https://www.instagram.com/josehenrii10/" target="_blank">
          <Instagram color="#d1d5db" />
        </a>
      </div>
    </footer>);
}