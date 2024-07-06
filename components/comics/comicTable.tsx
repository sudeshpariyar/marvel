import { IAllComics } from "@/types/comics";
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

const ComicTable = ({ comics }: { comics: IAllComics }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>ComicId</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {comics.results.map((comic) => (
          <TableRow key={comic.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/comics/${comic.id}`)}
            >
              {comic.id}
            </TableCell>
            <TableCell>{comic.title}</TableCell>
            <TableCell>{comic.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComicTable;
