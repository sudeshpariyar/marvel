import { IAllStories } from "@/types/stories";
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

const StoriesTable = ({ stories }: { stories: IAllStories }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>StoryId</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stories.results.map((story) => (
          <TableRow key={story.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/stories/${story.id}`)}
            >
              {story.id}
            </TableCell>
            <TableCell>{story.title}</TableCell>
            <TableCell>{story.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StoriesTable;
