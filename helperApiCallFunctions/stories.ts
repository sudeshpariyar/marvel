import axios from "@/lib/axios";

//Get all stories
interface IGetAllStoriesProps {
  resultLimit: number;
  currentPage: number;
  date?: Date;
}
export const getAllStories = async ({
  resultLimit,
  currentPage,
  date,
}: IGetAllStoriesProps) => {
  const response = await axios.get(
    `/stories?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        modifiedSince: date ? date : null,
      },
    }
  );
  return response.data.data;
};
//Get Individual Story
interface IGetIndividualStory {
  storyId: number;
}
export const getIndividualStory = async ({ storyId }: IGetIndividualStory) => {
  const response = await axios.get(
    `/stories/${storyId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Returns Data related to story according to Path
interface IGetDataFromSeriesIdProps {
  storyId: number;
  currentPage: number;
  resultLimit: number;
  characterName?: string;
  comicName?: string;
  creatorName?: string;
  eventName?: string;
  seriesName?: string;
  path: string;
}
export const getDataFromStoryId = async ({
  storyId,
  currentPage,
  resultLimit,
  characterName,
  creatorName,
  comicName,
  eventName,
  seriesName,
  path,
}: IGetDataFromSeriesIdProps) => {
  const response = await axios.get(
    `/stories/${storyId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        titleStartsWith: comicName ? comicName : seriesName ? seriesName : null,
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
