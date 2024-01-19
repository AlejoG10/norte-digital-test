import Heading from "@/components/dashboard/headings/heading";
import SaleForm from "@/components/dashboard/form/sale-form";

const NewSalePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Heading title="New Sale" />
      <SaleForm />
    </div>
  );
};

export default NewSalePage;
