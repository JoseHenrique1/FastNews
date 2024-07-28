export function Navbar() {
  const links = ["Brazil", "Sports", "Medicine", "Famous"]
  return (
    <nav className="bg-blue-800 p-4 flex flex-col gap-4 sm:flex-row">
      {links.map(link => (
        <div
          key={link}
          className="text-gray-300 hover:text-gray-50">
          {link}
        </div>
      ))}
    </nav>
  );
}
