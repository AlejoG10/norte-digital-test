import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-12">
      <h2 className="text-4xl text-center text-slate-800 font-black leading-snug">
        Choose your Plan!
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <PricingCard title="Free" price="0" />
        <PricingCard title="Advanced" price="49.99" main />
        <PricingCard title="Premium" price="99.99" />
      </div>
    </div>
  );
};

export default Pricing;
