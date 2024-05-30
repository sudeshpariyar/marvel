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
