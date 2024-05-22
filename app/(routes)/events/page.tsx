"use client";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { IAllEvents, IEvent } from "@/types/events";
import IndividualEventCard from "@/components/events/individualEventCard";
import CustomDropDown from "@/components/customDropDown";
import CustomPagination from "@/components/customPagination";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  eventName: z.string(),
});

const EventsPage = () => {
  const [allEvents, setAllEvents] = useState<IAllEvents>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventName, setEventName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
    },
  });

  const handleEventNameSubmit = (values: z.infer<typeof formSchema>) => {
    setEventName(values.eventName);
  };

  useEffect(() => {
    const getAllEvents = async () => {
      setLoading(true);
      await axios
        .get(`/events?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`, {
          params: {
            limit: resultLimit,
            offset: currentPage * resultLimit,
            nameStartsWith: eventName ? eventName : null,
            orderBy: "name",
          },
        })
        .then((response) => {
          setLoading(false);
          setAllEvents(response.data.data);
        });
    };
    getAllEvents();
  }, [resultLimit, currentPage, eventName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span> Total events {allEvents?.total}.</span>
        <div className="flex items-center gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEventNameSubmit)}>
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Event title starts with..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <CustomDropDown
            resultLimit={resultLimit}
            setResultLimit={setResultLimit}
          />
        </div>
      </div>

      {allEvents?.results.length && (
        <div className="flex flex-col gap-10">
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {allEvents.results.map((event) => (
              <IndividualEventCard key={event.id} event={event} />
            ))}
          </div>
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalResult={allEvents.total}
            resultLimit={resultLimit}
          />
        </div>
      )}
    </div>
  );
};

export default EventsPage;
