import { cn } from "@/lib/utils";
import { extraBoldFont } from "@/fonts";
import MobileMenu from "../mobile-menu/mobile-menu";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex gap-x-4 w-full">
      <div className="flex flex-col gap-y-3 w-full">
        <div className="relative flex justify-between items-center w-full">
          <h1
            className={cn(extraBoldFont.className, "text-3xl text-slate-800")}
          >
            {title}
          </h1>

          <MobileMenu />
        </div>
        <hr className="bg-neutral-300 w-full" />
      </div>
    </div>
  );
};

export default Heading;
