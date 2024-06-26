import {
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: "Date";
  resourceURI: string;
  urls: IUrls[];
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
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ISeriesItem[];
  };
}

export interface IAllCharacters {
  count: number;
  limit: number;
  offset: number;
  results: ICharacter[];
  total: number;
}
