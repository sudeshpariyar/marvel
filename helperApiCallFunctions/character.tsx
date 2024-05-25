import axios from "@/lib/axios";

//Gets all the Characters
interface IGetAllCharacterProps {
  currentPage: number;
  resultLimit: number;
  characterName: string;
}
export const getAllCharacters = async ({
  currentPage,
  resultLimit,
  characterName,
}: IGetAllCharacterProps) => {
  const response = await axios.get(
    `/characters?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        nameStartsWith: characterName ? characterName : null,
      },
    }
  );
  return response.data.data;
};

//Get single character
interface IGetSingleCharacterProps {
  characterId: number;
}
export const getSingelCharacter = async ({
  characterId,
}: IGetSingleCharacterProps) => {
  const response = await axios.get(
    `/characters/${characterId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Get Data Related to Character according to path
interface IGetDataFromCharacterIdProps {
  characterId: number;
  resultLimit: number;
  currentPage: number;
  comicName?: string;
  eventName?: string;
  path: string;
}
export const getDataFromCharacterId = async ({
  characterId,
  resultLimit,
  currentPage,
  comicName,
  eventName,
  path,
}: IGetDataFromCharacterIdProps) => {
  const response = await axios.get(
    `/characters/${characterId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        titleStartsWith: comicName ? comicName : null,
        nameStartsWith: eventName ? eventName : null,
      },
    }
  );
  return response.data.data;
};
