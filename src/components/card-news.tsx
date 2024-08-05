import photo from "../assets/img/usina.jpg"

interface props {
  title: string | null,
  urlToImage: string | null,
  description: string | null,
  url: string | null,
}
export function CardNews({ title, urlToImage, description, url }: props) {
  function openLink() {
    url && window.open(url, "_blank");
  }
  return (
    <div
      onClick={openLink}
      className="cursor-pointer bg-sky-100 dark:bg-sky-950 rounded flex flex-col max-w-screen-lg p-4 gap-1 transition duration-200 hover:bg-sky-200 dark:hover:bg-sky-900 sm:min-h-40 sm:gap-4 sm:flex-row">
      <img
          src={urlToImage || photo}
          alt={title || ""}
          className="rounded sm:aspect-video sm:h-40" />
      <div>
        <p>{title}</p>
        <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
      </div>
    </div>
  );
}
