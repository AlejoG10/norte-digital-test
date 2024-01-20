import Heading from "@/components/dashboard/headings/heading";
import SalesTable from "@/components/dashboard/sales/sales-table";

const SalesPage = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Heading title="Recent Sales" />
      <SalesTable />
    </div>
  );
};

export default SalesPage;
