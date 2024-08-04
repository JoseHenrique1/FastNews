import { Sun, Moon } from "lucide-react";
import { useState } from "react";

type theme = "light" | "dark" | null
export function ButtonTheme() {
  const [theme, setTheme] = useState<theme>(
    ()=>{
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark" || currentTheme =="light") {
        return currentTheme;
      }
      return null;
    }
  )

  function handleChangeTheme() {
    let previousTheme = localStorage.getItem("theme");
    previousTheme = previousTheme? previousTheme: "light";

    const newTheme = previousTheme === "dark"? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.body.classList.remove(previousTheme);
    document.body.classList.add(newTheme);

    setTheme(newTheme)    
  }
  
  return (
    <div
      onClick={handleChangeTheme}
      className="flex gap-1 sm:mr-0 sm:ml-auto cursor-pointer">
      {
        theme === "dark" ?
          <>
            <Moon color="#d1d5db" />
            <p className="text-gray-300">Dark</p>
          </>
          :
          <>
            <Sun color="#d1d5db" />
            <p className="text-gray-300">Light</p>
          </>
      }
    </div>
  );
}
