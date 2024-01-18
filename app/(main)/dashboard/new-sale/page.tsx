import Header from "@/components/dashboard/header";
import SaleForm from "@/components/dashboard/form/sale-form";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Header title="New Sale" imgUrl="" />
      <SaleForm />
    </div>
  );
};

export default Dashboard;
