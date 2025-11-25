import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import Goal from "@/components/goal";


export default function Home() {
  const goals = [

    {
      "title": "1. No Poverty",
      "description": "End poverty in all its form.",
      "ImageUrl": "/G1.jpg",
      "ImageAlt": "Goal 1"
    },
    {
      "title": "2. Zero Hunger",
      "description": "The food and agriculture sector offers key solutions for development, and is central for hunger and poverty eradication.",
      "ImageUrl": "/G2.jpg",
      "ImageAlt": "Goal 2"
    },
    {
      "title": "3. Good Health and Well-Being",
      "description": "Ensuring healthy lives and promoting the well- being for all at all ages is essential to sustainable development.",
      "ImageUrl": "/G3.jpg",
      "ImageAlt": "Goal 3"
    },
    {
      "title": "4. Quality Education",
      "description": "Obtaining a quality education is the foundation to improving people's lives and sustainable development.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 4"
    },
    {
      "title": "5. Gender Equality",
      "description": "Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 5"
    },
    {
      "title": "6. Clean Water and Sanitation",
      "description": "Clean, accessible water for all is an essential part of the world we want to live in.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 6"
    },
    {
      "title": "7. Affordable and Clean Energy",
      "description": "Energy is central to nearly every major challenge and opportunity.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 7"
    },
    {
      "title": "8. Decent Work and Economic Growth",
      "description": "Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 8"
    },
    {
      "title": "9. Industry, Innovattion and Infrastructure",
      "description": "Sustainable economic growth will require societies to create the conditions that allow people to have quality jobs.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 9"
    },
    {
      "title": "10. Reduced IneQualities",
      "description": "Investments in are crucial to achieving sustainable development.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 10"
    },

    {
      "title": "11. Sustainable Cities and Communities",
      "description": "There needs to be a future in which cities provide opportunities for all, with access to basic services, energy, housing, transportation and more.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 11"
    },
    {
      "title": "12. Responsible Consumption and Production",
      "description": "Responsible Production and Consumption",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 12"
    },

    {
      "title": "13. Climate Action",
      "description": "Climate change is a global challenge that affects everyone, everywhere",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 13"
    },
    {
      "title": "14. Life Below Water",
      "description": " Careful management of this essential global resource is a key feature of a sustainable future",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 14"
    },
       {
      "title": "15. Life On Land",
      "description": " Sustainably managed forest combat Desertification halt and rivers land degradation Heat. Biodiversity loss.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 15"
    },
          {
      "title": "16. Peace, Justice and Strong Institutions",
      "description": " Access to justice for all and building effective, accountable institutions at all levels",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 16"
    },
             {
      "title": "17. Partnerships For The Goals",
      "description": " Revitalize the Global Partnership for a Sustainable Development.",
      "ImageUrl": "/nature.jpg",
      "ImageAlt": "Goal 17"
    },
  ]
  return (
    <div className="w-full overflow-x-hidden px-4">

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

      <div className="grid grid-cols-1 lg:grid-cols-3">

        <Card className="border-green-600 border-4">
          <CardHeader>
            <CardTitle>Composting</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Instead of sending food scraps that include things like vegetable peels, avocado pits, and spoiled leftovers to landfill, Start composting. Composting is the process of returning anything that comes from nature to the earth and letting it biodegrade into soil. Setting up a compost bin is super easy if you have a backyard, but it's also possible if you live in an apartment or in the city with no yard.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-600 border-4">
          <CardHeader>
            <CardTitle>Reducing Single-Use Plastic</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              ☕ Food & Drinks:
              Carry a reusable water bottle and avoid buying bottled water.
              Use metal or bamboo straws instead of plastic ones.
              Pack lunches in reusable containers, not cling film or plastic bags.
              🧴 At Home:
              Refill bottles for soap, shampoo, and cleaning products instead of buying new ones.
              Avoid plastic cutlery and plates—use washable ones.
              Compost food waste to cut down on plastic trash bags.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-600 border-4">
          <CardHeader>
            <CardTitle>Transportation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you don't if a gas powered car every day, consider alternatives with lower emissions if they are available to you. For example, try walking, riding a bike, taking public transportation, carpooling or investing in a electric or hybrid car when you need a deal one. Additionally, ready environmentalists have given up in flying planes such as Jetta Sunbird. I met her footprint, so conditors considered traveling by train instead of by air if possible
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-600 border-4">
          <CardHeader>
            <CardTitle>Shopping</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              It was sustainable. Farmer shopping is not to shop at all and the second was a stable farm and more realistic form of shopping is shopping 2nd hand. Before buying anything video check out your local thrift store websites and apps like Posh Line, craigslist or eBay or your local buy. I think group on Facebook when it comes to items that you can buy secondhand companies that make products from natural or recycled materials while following sustainable business practices.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-600 border-4">
          <CardHeader>
            <CardTitle>Importance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              With climate change becoming a more serious problem every day, it's more important than ever for people to do their part to reduce their environment to environmental impact. Lawmakers and corruptions institute laws or policies to help with that is extremely important, but lowering your personal impact can make a huge difference as well.
            </p>
          </CardContent>
        </Card>
      </div>

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

      <Card className="border-green-600 border-4">
        <CardHeader>
          <CardTitle>What People Can do</CardTitle>
        </CardHeader>
        <CardContent>
          <li>Grow Food: Growing Some of your own food. Start a vegetable or herb garden and plant a fruit tree or even two. This will save tons of transport greenhouse gasses because the food will be right outside your door.</li>

          <li>Preserve Food:  did you know that preserving food by pickling drying or bottling is better than freezing in a refrigerator. Why? Because it uses less energy than the refrigerator.</li>
        </CardContent>

      </Card>

      <Card>
        <CardHeader>
          <CardTitle>LEAVE NO ONE BEHIND!</CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={"/peoplestand.jpg"} alt="people" width={300} height={500} />
          <CardDescription>
            The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face,
            including poverty, inequality, climate change, environmental degradation, peace and justice. Learn more and take action.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The 17 Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
            {
              goals.map((goal) => {
                return (
                  <Goal key={goal.title} title={goal.title} description={goal.description} imageUrl={goal.ImageUrl} imageAlt={goal.ImageAlt} />
                )
              }

              )
            }
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
