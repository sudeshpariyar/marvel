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
