import { useContext } from "react";
import { CardNews } from "./card-news";
import { CarouselNews } from "./carousel-news";
import { NewsContext } from "@/contexts/news-context";


export function Main() {
  const { news } = useContext(NewsContext)

  return (
    <main className="bg-white dark:bg-slate-800 p-4 gap-4 grid grid-cols-12">

      <div className="col-span-12 space-y-4 lg:col-span-8">
        <div className="h-20 flex flex-col justify-center ">
          <h1 className="text-2xl font-medium">Trending news</h1>
          <h2 className="text-slate-600 dark:text-slate-400">Check out the main news from around the world</h2>
        </div>
        <div className="space-y-4">
          {
            news.length == 0?
            <p>Nenhuma pesquisa sobre!</p>
            :
            news.map((currentNew, index) => (
              <CardNews
                key={index}
                {...currentNew} />
            ))
          }
        </div>
      </div>


      <div className="col-span-12 space-y-4 lg:col-span-4">
        <div className="h-20 flex flex-col justify-center ">
          <h1 className="text-2xl font-medium">Champions League</h1>
          <h2 className="text-slate-600 dark:text-slate-400">The best football league in the world</h2>
        </div>
        <CarouselNews />

        <div className="border-y-2 border-cyan-400 p-4">
          <h1>About</h1>
          <p className="text-slate-600 dark:text-slate-400">News site about various topics: Soccer, games, celebrities, and much more. Search for specific topics or check out the slider. Additionally, you can change the page theme.</p>
        </div>
      </div>

    </main>
  );
}
