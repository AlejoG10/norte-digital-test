import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-between w-[185px]">
        <div className="bg-gradient-to-r from-sky-500 to-sky-800 rounded-full h-12 w-12" />
        <p className="text-slate-800 text-[19px] font-semibold">LoremIpsum</p>
      </div>
    </Link>
  );
};

export default Brand;
