import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div>
      <Card className="border-green-600 border-4">
        <CardHeader>
          <CardTitle>What Is Sustainable Living</CardTitle>
        </CardHeader>
        <CardContent>



          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        <Image src={"/nature.jpg"} alt="nature" width={300} height={500} />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        <Image src={"/nature.jpg"} alt="nature" width={300} height={500} />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <p>Sustainable living is a lifestyle that aims to reduce an individual's or society's use of Earth's natural resources, promoting ecological balance and minimizing environmental impact. Sustainable living is also defined as a lifestyle that aims to reduce ones ecological footprint by making environmentally conscious choices. It involves meeting current needs without compromising the ability of future generations to meet theirs, encompassing environmental, social, and economic dimensions. This approach focuses on minimizing environmental impact and preserving resources for future generations, ensuring that the planet's resources can last indefinitely</p>
        </CardContent>

      </Card>



    </div>
  );
}
