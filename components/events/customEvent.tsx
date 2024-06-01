import { IAllEvents } from "@/types/events";
import React from "react";
import CustomDropDown from "../customDropDown";
import CustomPagination from "../customPagination";
import IndividualEventCard from "./individualEventCard";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomNoResultFound from "../customNoResultFound";
import CustomLoading from "../customLoading";
import CustomTotalFormDropDownWrapper from "../customTotalFormDropDownWrapper";

const formSchema = z.object({
  eventName: z.string(),
});

interface ICustomEventProps {
  allEvents?: IAllEvents;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setEventName: (value: string) => void;
  loading: boolean;
}

const CustomEvent = ({
  allEvents,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
  setEventName,
  loading,
}: ICustomEventProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
    },
  });

  const handleEventNameSubmit = (values: z.infer<typeof formSchema>) => {
    setEventName(values.eventName);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <CustomTotalFormDropDownWrapper totalResult={allEvents?.total}>
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
        </CustomTotalFormDropDownWrapper>
        {loading ? (
          <CustomLoading />
        ) : (
          <>
            {allEvents?.results.length ? (
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allEvents.results.map((event) => (
                    <IndividualEventCard key={event.id} event={event} />
                  ))}
                </div>
                <CustomPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalResult={allEvents.total as unknown as number}
                  resultLimit={resultLimit}
                />
              </div>
            ) : (
              <CustomNoResultFound />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CustomEvent;
