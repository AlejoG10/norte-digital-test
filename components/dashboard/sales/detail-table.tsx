import { SaleDetail, products } from "@/data";
import { cn, value } from "@/lib/utils";
import { semiBoldFont } from "@/fonts";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DetailTableProps {
  details: SaleDetail[];
  currency: string;
  total: number;
}

const DetailTable = ({ details, currency, total }: DetailTableProps) => {
  const getProductName = (id: string) => {
    return products.find((product) => product.id === id)!.name;
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
              Product ID
            </TableHead>
            <TableHead className={cn(semiBoldFont.className, "text-slate-800")}>
              Name
            </TableHead>
            <TableHead
              className={cn(
                semiBoldFont.className,
                "text-slate-800 text-right w-12"
              )}
            >
              Quantity
            </TableHead>
            <TableHead
              className={cn(
                semiBoldFont.className,
                "text-slate-800 text-right w-68"
              )}
            >
              Unit Price ({currency})
            </TableHead>
            <TableHead
              className={cn(
                semiBoldFont.className,
                "text-slate-800 text-right w-68"
              )}
            >
              Subtotal ({currency})
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {details.map((detail, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{detail.productId}</TableCell>
              <TableCell>{getProductName(detail.productId)}</TableCell>
              <TableCell className="text-right">{detail.quantity}</TableCell>
              <TableCell className="text-right">
                {value.format(detail.price)}
              </TableCell>
              <TableCell className="text-right">
                {value.format(detail.subtotal)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <br />
        <TableFooter className="bg-slate-50">
          <TableRow className="border-none">
            <TableCell colSpan={5}>Total ({currency}):</TableCell>
            <TableCell className="text-right">{value.format(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default DetailTable;
