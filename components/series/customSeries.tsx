import { IAllSeries } from "@/types/series";
import React from "react";
import CustomNoResultFound from "../customNoResultFound";
import IndividualSeriesCard from "./individualSeriesCard";
import CustomDropDown from "../customDropDown";
import CustomPagination from "../customPagination";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomLoading from "../customLoading";

interface ICustomSeriesProps {
  allSeries?: IAllSeries;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setSeriesName: (value: string) => void;
  loading: boolean;
}
const formSchema = z.object({
  seriesName: z.string(),
});

const CustomSeries = ({
  allSeries,
  resultLimit,
  setResultLimit,
  currentPage,
  setCurrentPage,
  setSeriesName,
  loading,
}: ICustomSeriesProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seriesName: "",
    },
  });

  const handleSeriesNameSubmit = (values: z.infer<typeof formSchema>) => {
    setSeriesName(values.seriesName);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <span> Total events {allSeries?.total}.</span>
        <div className="flex gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSeriesNameSubmit)}>
              <FormField
                control={form.control}
                name="seriesName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Series title starts with..."
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
      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {allSeries?.results.length ? (
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {allSeries.results.map((series) => (
                  <IndividualSeriesCard key={series.id} series={series} />
                ))}
              </div>
              <CustomPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalResult={allSeries.total as unknown as number}
                resultLimit={resultLimit}
              />
            </div>
          ) : (
            <CustomNoResultFound />
          )}
        </>
      )}
    </div>
  );
};

export default CustomSeries;
