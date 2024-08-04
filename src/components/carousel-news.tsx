import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import photoFut from "../assets/img/futebol.jpg"

//import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselNews() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (

            <CarouselItem key={index}>
              <div className="p-1 ">
                <img src={photoFut} className="shadow shadow-black aspect-video" />
              </div>
            </CarouselItem>

          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden"/>
        <CarouselNext className="hidden"/>
      </Carousel>
    </div>
  )
}
