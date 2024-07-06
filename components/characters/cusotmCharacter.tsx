import { IAllCharacters } from "@/types/characters";
import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import CustomDropDown from "../customDropDown";
import IndividualCharacterCard from "./individualCharacterCard";
import CustomPagination from "../customPagination";
import CustomNoResultFound from "../customNoResultFound";
import CustomLoading from "../customLoading";
import CustomTotalFormDropDownWrapper from "../customTotalFormDropDownWrapper";
import CharacterTable from "./characterTable";

const formSchema = z.object({
  characterNameStartsWith: z.string(),
});

interface ICustomCharacterProps {
  allCharacters?: IAllCharacters;
  currentPage: number;
  setCurrentPage: (arg0: number) => void;
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setCharacterName: (value: string) => void;
  loading: boolean;
}

const CusotmCharacter = ({
  allCharacters,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
  setCharacterName,
  loading,
}: ICustomCharacterProps) => {
  const [displayGrid, setDisplayGrid] = useState("grid");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterNameStartsWith: "",
    },
  });
  const handleCharacterSubmit = (values: z.infer<typeof formSchema>) => {
    setCharacterName(values.characterNameStartsWith);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <CustomTotalFormDropDownWrapper
          totalResult={allCharacters?.total}
          setDisplayGrid={setDisplayGrid}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleCharacterSubmit)}>
              <FormField
                control={form.control}
                name="characterNameStartsWith"
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
            setCurrentPage={setCurrentPage}
          />
        </CustomTotalFormDropDownWrapper>
        {loading ? (
          <CustomLoading />
        ) : (
          <>
            {allCharacters?.results.length ? (
              <div className="flex flex-col gap-4">
                {displayGrid === "grid" ? (
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {allCharacters.results.map((character) => (
                      <IndividualCharacterCard
                        key={character.id}
                        character={character}
                      />
                    ))}
                  </div>
                ) : (
                  <CharacterTable characters={allCharacters} />
                )}

                <CustomPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalResult={allCharacters?.total as number}
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

export default CusotmCharacter;
