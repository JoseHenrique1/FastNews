import photo from "../assets/img/usina.jpg"
export function CardNews() {
  return (
    <div className="bg-sky-100 dark:bg-sky-950 rounded flex flex-col max-w-screen-lg p-4 gap-1 sm:h-40 sm:gap-4 sm:flex-row">
      <img
        src={photo}
        alt=""
        className="rounded" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis alias sint unde asperiores maiores, incidunt reiciendis harum consectetur possimus porro quisquam commodi laudantium architecto doloremque, obcaecati repellendus! Rerum, nobis!
      </div>
    </div>
  );
}
