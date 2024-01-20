import Heading from "@/components/dashboard/headings/heading";
import SaleForm from "@/components/form/sale-form";

const NewSalePage = () => {
  return (
    <div className="flex flex-col gap-y-8 h-full">
      <Heading title="New Sale" />
      <SaleForm />
    </div>
  );
};

export default NewSalePage;
