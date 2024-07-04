import { IAllCreators } from "@/types/creator";
import React from "react";
import IndividualCreatorCard from "./individualCreatorCard";
import CustomDropDown from "../customDropDown";
import CustomPagination from "../customPagination";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import CustomNoResultFound from "../customNoResultFound";
import CustomLoading from "../customLoading";
import CustomTotalFormDropDownWrapper from "../customTotalFormDropDownWrapper";

const formSchema = z.object({
  creatorName: z.string(),
});

interface ICustomCreatorProps {
  allCreators?: IAllCreators;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setCreatorName: (value: string) => void;
  loading: boolean;
}

const CustomCreator = ({
  allCreators,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
  setCreatorName,
  loading,
}: ICustomCreatorProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      creatorName: "",
    },
  });

  const handleCreatorNameSubmit = (values: z.infer<typeof formSchema>) => {
    setCreatorName(values.creatorName);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <CustomTotalFormDropDownWrapper totalResult={allCreators?.total}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCreatorNameSubmit)}>
              <FormField
                control={form.control}
                name="creatorName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Creator name starts with..."
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
            setCurrentPage={setCurrentPage}
          />
        </CustomTotalFormDropDownWrapper>
        {loading ? (
          <CustomLoading />
        ) : (
          <>
            {allCreators?.results.length ? (
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allCreators.results.map((creator) => (
                    <IndividualCreatorCard key={creator.id} creator={creator} />
                  ))}
                </div>
                <CustomPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalResult={allCreators.total as unknown as number}
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

export default CustomCreator;
