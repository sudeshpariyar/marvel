import {
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface IAllCreators {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICreator[];
}
export interface ICreator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: "Date";
  resourceURI: string;
  urls: IUrls[];
  thumbnail: IThumbnail;
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ISeriesItem[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualStory[];
  };
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualComic[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualEvent[];
  };
}
