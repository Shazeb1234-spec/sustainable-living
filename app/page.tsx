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

          <div className="grid place-content-center">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          <Image src={"/nature2.jpg"} alt="nature2" width={300} height={500} />
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
          </div>



          <p>Sustainable living is a lifestyle that aims to reduce an individual's or society's use of Earth's natural resources, promoting ecological balance and minimizing environmental impact. Sustainable living is also defined as a lifestyle that aims to reduce ones ecological footprint by making environmentally conscious choices. It involves meeting current needs without compromising the ability of future generations to meet theirs, encompassing environmental, social, and economic dimensions. This approach focuses on minimizing environmental impact and preserving resources for future generations, ensuring that the planet's resources can last indefinitely</p>
        </CardContent>

      </Card>

      <Card className="border-green-600 border-4">
        <CardHeader>
          <CardTitle>Impact Of Sustainable Living</CardTitle>
        </CardHeader>
        <CardContent>
          <li>   The average American produces 4.4 pounds of trash per day according to the EPA that comes out to more than 1600 lbs per year so by transitioning to a zero waste lifestyle you could literally save thousands of pounds of trash from going to landfills where it would emit harmful greenhouse gasses. </li>

          <li>Sustainable living positively impacts the environment and personal well-being by reducing waste and pollution, conserving natural resources, and mitigating climate change. It also leads to economic savings, improved health from more active and less-polluted lifestyles, and a greater sense of personal satisfaction and community involvement.</li>

          <li>
            Improves health: Choosing to walk or cycle instead of drive, and eating healthier, more sustainable foods can lead to a more active and healthier lifestyle.
            Saves money: Reducing energy and water use, and buying less can lead to lower utility bills and reduced expenses.
            Increases well-being: Focusing on simplicity and resourcefulness can lead to a greater sense of personal satisfaction, reduced stress, and increased happiness.
            Fosters community: Sustainable practices often encourage more community involvement and can lead to more vibrant, livable communities.
          </li>

        </CardContent>

      </Card>



    </div>
  );
}
