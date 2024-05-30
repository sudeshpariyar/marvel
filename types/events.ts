import {
  IIndividualCharacter,
  IIndividualComic,
  IIndividualCreator,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface IEvent {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: IUrls[];
  modified: "Date";
  start: "Date";
  end: "Date";
  thumbnail: IThumbnail;
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualComic[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualStory[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ISeriesItem[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualCharacter[];
  };
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualCreator[];
  };
  next: {
    resourceURI: string;
    name: string;
  };
  previous: {
    resourceURI: string;
    name: string;
  };
}
export interface IAllEvents {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IEvent[];
}
