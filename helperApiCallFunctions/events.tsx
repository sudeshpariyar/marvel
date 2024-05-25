import axios from "@/lib/axios";
interface IGetAllEventsProps {
  resultLimit: number;
  currentPage: number;
  eventName: string;
}

//Gets all the events
export const getAllEvents = async ({
  resultLimit,
  currentPage,
  eventName,
}: IGetAllEventsProps) => {
  const response = await axios.get(
    `/events?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        limit: resultLimit,
        offset: currentPage * resultLimit,
        nameStartsWith: eventName ? eventName : null,
        orderBy: "name",
      },
    }
  );
  return response.data.data;
};

interface IGetIndividualEventProps {
  eventId: number;
}
//Returns single event
export const getIndividualEvent = async ({
  eventId,
}: IGetIndividualEventProps) => {
  const response = await axios.get(
    `events/${eventId}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`
  );
  return response.data.data.results[0];
};

//Returns Data related to event according to Path
interface IGetDataFromEventIdProps {
  eventId: number;
  currentPage: number;
  resultLimit: number;
  characterName?: string;
  comicName?: string;
  creatorName?: string;
  path: string;
}
export const getDataFromEventId = async ({
  eventId,
  currentPage,
  resultLimit,
  characterName,
  creatorName,
  path,
}: IGetDataFromEventIdProps) => {
  const response = await axios.get(
    `/events/${eventId}/${path}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    {
      params: {
        offset: currentPage * resultLimit,
        limit: resultLimit,
        nameStartsWith: characterName
          ? characterName
          : creatorName
          ? creatorName
          : null,
      },
    }
  );
  return response.data.data;
};
