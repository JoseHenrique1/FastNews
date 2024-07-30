import { Facebook, Github, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return ( 
  <footer className="bg-blue-800 p-4 space-y-2">
    <h1 className="w-full text-center text-2xl font-medium text-gray-300">Fastnews</h1>
    <div className="flex justify-center gap-4">
      <Github color="#d1d5db"/>
      <Instagram color="#d1d5db"/>
      <Facebook color="#d1d5db"/>
      <Youtube color="#d1d5db"/>
    </div>
  </footer> );
}