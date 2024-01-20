"use client";

import { useRouter } from "next/navigation";

import { branchOffices, clients, sales } from "@/data";
import { cn, value } from "@/lib/utils";
import { semiBoldFont } from "@/fonts";
import {
  Table,
  TableBody,
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
    <section className="bg-slate-50 border rounded-md px-5 py-2 h-fit">
      <Table>
        <TableHeader>
          <TableRow className="text-base">
            <TableHead
              className={cn(semiBoldFont.className, "text-slate-800 w-12")}
            >
              #
            </TableHead>
            <TableHead className={cn(semiBoldFont.className, "text-slate-800")}>
              Date
            </TableHead>
            <TableHead className={cn(semiBoldFont.className, "text-slate-800")}>
              Client
            </TableHead>
            <TableHead className={cn(semiBoldFont.className, "text-slate-800")}>
              Branch Office
            </TableHead>
            <TableHead className={cn(semiBoldFont.className, "text-slate-800")}>
              Currency
            </TableHead>
            <TableHead
              className={cn(
                semiBoldFont.className,
                "text-slate-800 text-right w-12"
              )}
            >
              Total
            </TableHead>
            <TableHead className="w-40"></TableHead>
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
                {value.format(sale.total)}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  className="bg-sky-500 hover:bg-sky-600"
                  onClick={() => router.push(`/dashboard/sales/${sale.id}`)}
                >
                  <p className="text-xs">Detail</p>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default SalesTable;
