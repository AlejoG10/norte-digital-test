import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
}

const ProductCard = ({ icon: Icon }: ProductCardProps) => {
  return (
    <div className="mx-auto col-span-12 md:col-span-6 xl:col-span-3 max-w-[350px]">
      <div className="flex flex-col justify-around items-center bg-gradient-to-br from-sky-500 to-sky-400 rounded-md shadow-xl mb-4 p-6 h-80 cursor-pointer hover:scale-110 duration-300">
        <h3 className="text-white font-bold text-2xl">Lorem Ipsum</h3>
        <Icon className="w-16 h-16 text-white" />
        <p className="text-slate-100 text-center font-base leading-6 w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
