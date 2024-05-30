import {
  IIndividualCharacter,
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  IThumbnail,
  IUrls,
} from "./common";

export interface ISeries {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: IUrls[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: "Date";
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
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualEvent[];
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
    items: IIndividualCharacter[];
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

export interface IAllSeries {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ISeries[];
}
