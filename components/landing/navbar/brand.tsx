import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-between w-[185px]">
        <div className="bg-gradient-to-br from-sky-600 to-sky-400 rounded-full h-12 w-12" />
        <p className="text-slate-800 text-[19px] font-bold">LoremIpsum</p>
      </div>
    </Link>
  );
};

export default Brand;
