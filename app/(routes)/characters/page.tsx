"use client";
import React, { useEffect, useState } from "react";
import CustomDropDown from "@/components/customDropDown";
import CustomPagination from "@/components/customPagination";
import { IAllCharacters } from "@/types/characters";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import IndividualCharacterCard from "@/components/individualCharacterCard";
import axios from "@/lib/axios";
const formSchema = z.object({
  characterName: z.string(),
});

const CharacterPage = () => {
  const [allCharacters, setAllCharacters] = useState<IAllCharacters>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [resultLimit, setResultLimit] = useState(10);
  const [characterName, setCharacterName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: "",
    },
  });

  const handleCharacterSubmit = (values: z.infer<typeof formSchema>) => {
    setCharacterName(values.characterName);
  };
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        await axios
          .get(
            `/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
            {
              params: {
                offset: currentPage * resultLimit,
                limit: resultLimit,
                nameStartsWith: characterName ? characterName : null,
              },
            }
          )
          .then((response) => {
            setAllCharacters(response.data.data);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, [currentPage, resultLimit, characterName]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="sm:px-4 md:px-16 lg:px-64 xl:124 my-10">
      <div className="flex justify-between my-4">
        <div> Total Characters {allCharacters?.total}.</div>
        <div className="flex gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCharacterSubmit)}>
              <FormField
                control={form.control}
                name="characterName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="starting letters" {...field} />
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {allCharacters?.results.length &&
          allCharacters.results.map((character) => (
            <IndividualCharacterCard key={character.id} character={character} />
          ))}
      </div>
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalResult={allCharacters?.total as number}
        resultLimit={resultLimit}
      />
    </div>
  );
};

export default CharacterPage;
