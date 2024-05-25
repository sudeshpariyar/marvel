import axios from "@/lib/axios";

//Get all Creators
interface IGetAllCreatorsProps {
  resultLimit: number;
  currentPage: number;
  creatorName: string;
}
export const getAllCreators = async ({
  resultLimit,
  currentPage,
  creatorName,
}: IGetAllCreatorsProps) => {
  const response = await axios.get(
    `/creators?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        nameStartsWith: creatorName ? creatorName : null,
      },
    }
  );
  return response.data.data;
};

//Get Single Creator
interface IGetSingleCreatorProps {
  creatorId: number;
}
export const getSingleCreator = async ({
  creatorId,
}: IGetSingleCreatorProps) => {
  const response = await axios.get(
    `/creators/${creatorId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Get data related to creator according to path
interface IGetDataFromCreatorIdProps {
  creatorId: number;
  resultLimit: number;
  currentPage: number;
  comicName?: string;
  eventName?: string;
  path: string;
}
export const getDataFromCreatorId = async ({
  creatorId,
  resultLimit,
  currentPage,
  comicName,
  eventName,
  path,
}: IGetDataFromCreatorIdProps) => {
  const response = await axios.get(
    `/creators/${creatorId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
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
