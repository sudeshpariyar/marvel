import axios from "@/lib/axios";

//Get all Series
interface IGetAllSeriesProps {
  resultLimit: number;
  currentPage: number;
  seriesName: string;
}
export const getAllSeries = async ({
  resultLimit,
  currentPage,
  seriesName,
}: IGetAllSeriesProps) => {
  const response = await axios.get(
    `/series?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        titleStartsWith: seriesName ? seriesName : null,
      },
    }
  );
  return response.data.data;
};

//Get Individual Sereies
interface IGetIndividualSeries {
  seriesId: number;
}
export const getIndividualSeries = async ({
  seriesId,
}: IGetIndividualSeries) => {
  const response = await axios.get(
    `/series/${seriesId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Returns Data related to series according to Path
interface IGetDataFromSeriesIdProps {
  seriesId: number;
  currentPage: number;
  resultLimit: number;
  characterName?: string;
  comicName?: string;
  creatorName?: string;
  eventName?: string;
  path: string;
}
export const getDataFromSeriesId = async ({
  seriesId,
  currentPage,
  resultLimit,
  characterName,
  creatorName,
  comicName,
  eventName,
  path,
}: IGetDataFromSeriesIdProps) => {
  const response = await axios.get(
    `/series/${seriesId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        titleStartsWith: comicName ? comicName : null,
        nameStartsWith: characterName
          ? characterName
          : creatorName
          ? creatorName
          : eventName
          ? eventName
          : null,
      },
    }
  );
  return response.data.data;
};
