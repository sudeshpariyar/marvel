import axios from "@/lib/axios";

export const getAllCharacters = async (
  currentPage: number,
  resultLimit: number,
  characterName: string
) => {
  return await axios.get(
    `/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        nameStartsWith: characterName ? characterName : null,
      },
    }
  );
};
