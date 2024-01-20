import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingCardProps {
  main?: boolean;
  title: string;
  price: string;
}

const PricingCard = ({ main, title, price }: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "space-y-10",
        main ? "bg-sky-500 w-80 overflow-hidden" : "w-76"
      )}
    >
      <CardHeader
        className={cn(
          "flex flex-col justify-center items-center gap-y-8",
          main && "relative"
        )}
      >
        <CardTitle
          className={cn(
            "font-base text-xl",
            main ? "text-white" : "text-slate-800"
          )}
        >
          {title}
        </CardTitle>
        <CardDescription
          className={cn(
            "font-black text-5xl",
            main ? "text-white" : "text-slate-800"
          )}
        >
          ${price}
        </CardDescription>

        {main && (
          <div className="absolute right-6 -top-3 flex justify-center items-center bg-sky-900 w-16 h-12 rounded-lg">
            <p className="text-white text-sm">Best</p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ul
          className={cn(
            "flex flex-col justify-center items-center gap-y-4 text-sm text-center",
            main ? "text-white" : "text-slate-800"
          )}
        >
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor amet consectetur</li>
          <li>Lorem ipsum dolor adipisicing</li>
          {main && (
            <>
              <li>Lorem ipsum dolor amet consectetur</li>
              <li>Lorem ipsum dolor adipisicing</li>
            </>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            " w-full",
            main
              ? "bg-white hover:bg-neutral-100 text-sky-500"
              : "bg-sky-500 hover:bg-sky-600 text-white"
          )}
        >
          Select
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
