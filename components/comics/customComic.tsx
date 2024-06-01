import { IAllComics } from "@/types/comics";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import CustomDropDown from "../customDropDown";
import IndividualComic from "./individualComicCard";
import CustomPagination from "../customPagination";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomNoResultFound from "../customNoResultFound";
import CustomLoading from "../customLoading";
import CustomTotalFormDropDownWrapper from "../customTotalFormDropDownWrapper";

interface ICustomComicProps {
  allComics?: IAllComics;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setComicName: (value: string) => void;
  loading: boolean;
}

const formSchema = z.object({
  comicName: z.string(),
});

const CustomComic = ({
  allComics,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
  setComicName,
  loading,
}: ICustomComicProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comicName: "",
    },
  });

  const handleCommicNameSubmit = (values: z.infer<typeof formSchema>) => {
    setComicName(values.comicName);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <CustomTotalFormDropDownWrapper totalResult={allComics?.total}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCommicNameSubmit)}>
              <FormField
                control={form.control}
                name="comicName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Title starts with..." {...field} />
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
            {allComics?.results.length ? (
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {allComics.results.map((comic) => (
                    <IndividualComic key={comic.id} comic={comic} />
                  ))}
                </div>
                <CustomPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalResult={allComics?.total as unknown as number}
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

export default CustomComic;
