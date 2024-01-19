import { cn } from "@/lib/utils";
import { extraBoldFont } from "@/fonts";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex gap-x-4 w-full">
      <div className="flex flex-col gap-y-3 w-full">
        <h1 className={cn(extraBoldFont.className, "text-3xl text-slate-800")}>
          {title}
        </h1>
        <hr className="bg-neutral-300 w-full" />
      </div>
    </div>
  );
};

export default Heading;
