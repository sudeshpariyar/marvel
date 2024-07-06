import { IAllSeries } from "@/types/series";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const SeriesTable = ({ series }: { series: IAllSeries }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>SeriesId</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {series.results.map((ser) => (
          <TableRow key={ser.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/series/${ser.id}`)}
            >
              {ser.id}
            </TableCell>
            <TableCell>{ser.title}</TableCell>
            <TableCell>{ser.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SeriesTable;
