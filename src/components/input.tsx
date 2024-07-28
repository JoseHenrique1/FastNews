import { Search } from "lucide-react";
import { useRef } from "react";

export function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickIconSearch() {
    console.log("pesquisa");
    
  }


  return (
    <div className="w-full bg-white rounded flex flex-row-reverse gap-1 p-1 sm:w-auto">
      <input
        ref={inputRef}
        type="text"
        placeholder="To search"
        className="peer w-full focus:outline-none sm:w-auto" />
      <Search
        onClick={handleClickIconSearch}
        className="flex peer-focus:bg-red-300 cursor-pointer" />
    </div>
  );
}
