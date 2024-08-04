import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import photoFut from "../assets/img/futebol.jpg"
import photoArsenal from "../assets/img/arsenal.jpg"
import photoUnity from "../assets/img/mancheste_unit.jpg"
import photoMUnity from "../assets/img/manchester_u.jpg"

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
  const images = [
    photoFut,
    photoArsenal,
    photoUnity,
    photoMUnity,
  ]

  return (
    <div className="w-full flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        
      >
        <CarouselContent>
          {images.map((image, index) => (

            <CarouselItem key={index}>
              <div className="p-1 ">
                <img src={image} className="shadow shadow-black aspect-video" />
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
