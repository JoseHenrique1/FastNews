import { CardNews } from "./card-news";
import { CarouselNews } from "./carousel-news";
export function Main() {
  return (
    <main className="bg-gray-50 p-4 gap-4 grid grid-cols-12">

      <div className="col-span-12 space-y-4 lg:col-span-8">
        <div className="h-20 flex flex-col justify-center ">
          <h1 className="text-2xl font-medium">Trending news</h1>
          <h2>Check out the main news from around the world</h2>
        </div>
        <div className="space-y-4">
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>


      <div className="col-span-12 space-y-4 lg:col-span-4">
        <div className="h-20 flex flex-col justify-center ">
          <h1 className="text-2xl font-medium">Champions League</h1>
          <h2>The best football league in the world</h2>
        </div>
        <CarouselNews />
        
        <div className="border-y-2 border-cyan-400 p-4">
          <h1>About</h1>
          <p>Web site of current news and ...</p>
        </div>
      </div>

    </main>
  );
}
