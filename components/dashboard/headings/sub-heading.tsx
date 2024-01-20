import { cn } from "@/lib/utils";
import { boldFont } from "@/fonts";

interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <h2 className={cn(boldFont.className, "text-lg text-slate-800")}>
      {title}
    </h2>
  );
};

export default SubHeading;
