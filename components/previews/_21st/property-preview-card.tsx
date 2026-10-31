// 21st.dev: @shadcnspace/card-02 — Property Preview Card
// Imports local-adapted to our tree.
import { Badge } from "@/components/ui/shadcn/badge";
import { Card } from "@/components/ui/shadcn/card";
import { ArrowRight, Bath, BedDouble, Expand } from "lucide-react";

export interface PropertyPreviewCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  href?: string;
}

export function PropertyPreviewCard({
  image, title, address, price, beds, baths, area, href = "#",
}: PropertyPreviewCardProps) {
  return (
    <Card className="relative gap-0 py-0 rounded-2xl group hover:shadow-xl duration-300 overflow-hidden">
      <div className="overflow-hidden rounded-t-2xl">
        <a href={href}>
          <div className="w-full h-72">
            <img
              src={image}
              alt={title}
              width={440}
              height={300}
              className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
            />
          </div>
        </a>
        <div className="absolute top-6 right-6 hidden p-4 bg-white rounded-full group-hover:block">
          <ArrowRight className="text-card-foreground" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between gap-5 mb-6">
          <div>
            <a href={href}>
              <h3 className="text-xl font-medium duration-300 group-hover:text-primary">
                {title}
              </h3>
            </a>
            <p className="text-base font-normal text-muted-foreground">{address}</p>
          </div>
          <Badge className="px-5 py-4 text-base font-normal rounded-full bg-teal-500/10 text-teal-700 border-transparent whitespace-nowrap">
            {price}
          </Badge>
        </div>

        <div className="flex">
          <div className="flex flex-col gap-2 pr-4 sm:pr-8 border-e border-border">
            <BedDouble size={20} />
            <p className="text-sm sm:text-base">{beds}</p>
          </div>
          <div className="flex flex-col gap-2 px-4 sm:px-8 border-e border-border">
            <Bath size={20} />
            <p className="text-sm sm:text-base">{baths}</p>
          </div>
          <div className="flex flex-col gap-2 pl-4 sm:pl-8">
            <Expand size={20} />
            <p className="text-sm sm:text-base">{area}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
