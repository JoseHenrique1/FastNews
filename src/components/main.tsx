import { useContext } from "react";
import { CardNews } from "./card-news";
import { CarouselNews } from "./carousel-news";
import { NewsContext } from "@/contexts/news-context";

import photo1 from "../assets/img/futebol.jpg"
import photo2 from "../assets/img/fastnews_logo.png"
import photo3 from "../assets/img/aaa.jpeg"
export function Main() {
  const { news } = useContext(NewsContext)
  /* const news = [
    {
      title: "a",
      description: "hahaha aha aha aa a a a ahahahaha a a haahhaha a ahaha aa ahahahaha ahaaha a a",
      urlToImage: photo1,
      url: "https://www.google.com",
    },
    {
      title: "a",
      description: "hahaha aha aha aa a a a ahahahaha a a haahhaha a ahaha aa ahahahaha ahaaha a a",
      urlToImage: photo2,
      url: "https://www.google.com",
    },
    {
      title: "a",
      description: "hahaha aha aha aa a a a ahahahaha a a haahhaha a ahaha aa ahahahaha ahaaha a a",
      urlToImage: photo3,
      url: "https://www.google.com",
    },
    
  ] */
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
          {/* <CardNews />
          <CardNews />
          <CardNews /> */}
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
          <p className="text-slate-600 dark:text-slate-400">Web site of current news and ...</p>
        </div>
      </div>

    </main>
  );
}
