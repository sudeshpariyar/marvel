import axios from "@/lib/axios";
import { IComic } from "@/types/comics";

//Return all the comics
interface IGetAllComicsProps {
  resultLimit: number;
  currentPage: number;
  comicName: string;
}
export const getAllComics = async ({
  resultLimit,
  currentPage,
  comicName,
}: IGetAllComicsProps) => {
  const response = await axios.get(
    `/comics?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        orderBy: "title",
        titleStartsWith: comicName ? comicName : null,
      },
    }
  );
  return response.data.data;
};

//Return Single comic
interface IGetSingleComic {
  comicId: number;
}
export const getSingleComic = async ({ comicId }: IGetSingleComic) => {
  const response = await axios.get(
    `/comics/${comicId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Returns Data related to Comic according to Path
interface IGetDataFromComicIdProps {
  comicId: number;
  currentPage: number;
  resultLimit: number;
  eventName?: string;
  characterName?: string;
  creatorName?: string;
  path: string;
}
export const getDataFromComicId = async ({
  comicId,
  currentPage,
  resultLimit,
  eventName,
  characterName,
  creatorName,
  path,
}: IGetDataFromComicIdProps) => {
  const response = await axios.get(
    `/comics/${comicId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        nameStartsWith: characterName
          ? characterName
          : eventName
          ? eventName
          : creatorName
          ? creatorName
          : null,
      },
    }
  );
  return response.data.data;
};
