import { IAllEvents } from "@/types/events";
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

const EventsTable = ({ events }: { events: IAllEvents }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>EventId</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.results.map((event) => (
          <TableRow key={event.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/events/${event.id}`)}
            >
              {event.id}
            </TableCell>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventsTable;
