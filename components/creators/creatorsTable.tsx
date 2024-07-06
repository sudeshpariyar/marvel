import { IAllCreators } from "@/types/creator";
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

const CreatorsTable = ({ creators }: { creators: IAllCreators }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>CreatorId</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Series</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {creators.results.map((creator) => (
          <TableRow key={creator.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/creators/${creator.id}`)}
            >
              {creator.id}
            </TableCell>
            <TableCell>{creator.fullName}</TableCell>
            <TableCell>{creator.series.items[0]?.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CreatorsTable;
