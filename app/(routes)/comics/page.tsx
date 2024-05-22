"use client";
import IndividualComic from "@/components/individualComicCard";
import { IAllComics } from "@/types/comics";
import axios from "@/lib/axios";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/customDropDown";
import CustomPagination from "@/components/customPagination";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  comicName: z.string(),
});

const ComicsPage = () => {
  const [allComics, setAllComics] = useState<IAllComics>();
  const [loading, setLoading] = useState(false);
  const [resultLimit, setResultLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicName, setComicName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comicName: "",
    },
  });

  const handleCommicNameSubmit = (values: z.infer<typeof formSchema>) => {
    setComicName(values.comicName);
  };

  useEffect(() => {
    const getComics = async () => {
      setLoading(true);
      try {
        await axios
          .get(`/comics?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`, {
            params: {
              limit: resultLimit,
              offset: currentPage * resultLimit,
              orderBy: "title",
              titleStartsWith: comicName ? comicName : null,
            },
          })
          .then((response) => {
            setAllComics(response.data.data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getComics();
  }, [resultLimit, currentPage, comicName]);
  if (loading) {
    return <div className="h-dvh">Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span>Total Comics {allComics?.total}.</span>
        <div className="flex items-center gap-2">
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
        </div>
      </div>
      {allComics?.results.length && (
        <div className="flex flex-col gap-10">
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
      )}
    </div>
  );
};

export default ComicsPage;
