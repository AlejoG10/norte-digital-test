"use client";

import { redirect } from "next/navigation";

import { branchOffices, sales } from "@/data";
import Heading from "@/components/dashboard/headings/heading";
import DetailTable from "@/components/dashboard/sales/detail-table";

interface IParams {
  params: {
    saleId: string;
  };
}

const SaleDetailPage = ({ params }: IParams) => {
  const sale = sales.find((sale) => sale.id === params.saleId);

  if (!sale) {
    redirect("/dashboard/new-sale");
  }

  const getCurrency = () => {
    return branchOffices.find(
      (branchOffice) => branchOffice.country === sale.branchOffice
    )!.currency;
  };

  return (
    <div className="flex flex-col gap-y-5">
      <Heading title="Sale Detail" />
      <DetailTable
        details={sale.details}
        currency={getCurrency()}
        total={sale.total}
      />
    </div>
  );
};

export default SaleDetailPage;
