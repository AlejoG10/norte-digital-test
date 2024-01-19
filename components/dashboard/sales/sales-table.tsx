"use client";

import { useRouter } from "next/navigation";

import { branchOffices, clients, sales } from "@/data";
import { valor } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const SalesTable = () => {
  const router = useRouter();

  const getFullName = (RUT: string) => {
    const client = clients.find((client) => client.RUT === RUT)!;
    return `${client.name} ${client?.lastName}`;
  };

  const getCurrency = (country: string) => {
    return branchOffices.find((bo) => bo.country === country)!.currency;
  };

  return (
    <Table>
      <TableCaption>Recent sales.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">#</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Branch Office</TableHead>
          <TableHead>Currency</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sales.map((sale, i) => (
          <TableRow key={sale.id}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell>{sale.date.toDateString()}</TableCell>
            <TableCell>{getFullName(sale.clientRUT)}</TableCell>
            <TableCell>{sale.branchOffice}</TableCell>
            <TableCell>{getCurrency(sale.branchOffice)}</TableCell>
            <TableCell className="text-right">
              {valor.format(sale.total)}
            </TableCell>
            <TableCell>
              <Button
                size="sm"
                className="bg-sky-500 hover:bg-sky-600 w-full"
                onClick={() => router.push(`/dashboard/sales/${sale.id}`)}
              >
                <p className="text-xs">Detail</p>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SalesTable;
