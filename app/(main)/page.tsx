import Navbar from "@/components/landing/navbar/navbar";
import Banner from "@/components/landing/banner";
import Products from "@/components/landing/products/products";
import Pricing from "@/components/landing/pricing/pricing";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-y-20 px-12 sm:px-16">
        <Banner />
        <div id="products" />
        <Products />
        <div id="pricing" />
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
