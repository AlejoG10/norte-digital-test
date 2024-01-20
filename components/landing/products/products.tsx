import { Cpu, Database, Lock, Target } from "lucide-react";

import ProductCard from "./product-card";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-12">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-4xl text-center text-slate-800 font-black leading-snug">
          Our Products
        </h2>

        <p className="text-slate-700 text-center font-base leading-8 w-full sm:max-w-[400px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          debitis deleniti quos. Maiores libero reprehenderit molestia!
        </p>
      </div>

      {/* products */}
      <div className="grid grid-cols-12 gap-6 w-full">
        <ProductCard icon={Target} />
        <ProductCard icon={Cpu} />
        <ProductCard icon={Database} />
        <ProductCard icon={Lock} />
      </div>
    </div>
  );
};

export default Products;
