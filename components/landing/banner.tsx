import Image from "next/image";

import LoginBtn from "@/components/landing/navbar/login-btn";

const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-y-10 z-10">
        <h1 className="text-5xl text-center text-slate-800 font-black leading-snug">
          Lorem Ipsum Dolor Sit
        </h1>
        <p className="text-slate-700 text-center font-base leading-8 max-w-96">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          debitis deleniti quos. Maiores libero reprehenderit molestia!
        </p>
        <LoginBtn className="w-40" />
      </div>

      <Image
        src="/images/wave.svg"
        alt="wave"
        width={0}
        height={0}
        className="absolute bottom-0 w-screen"
      />
    </div>
  );
};

export default Banner;
