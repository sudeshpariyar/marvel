import {
  IIndividualCharacter,
  IIndividualComic,
  IIndividualCreator,
  IIndividualEvent,
  ISeriesItem,
  IThumbnail,
} from "./common";

export interface IAllStories {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IStory[];
}

export interface IStory {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: "Date";
  thumbnail: IThumbnail;
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualComic[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ISeriesItem[];
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
    items: IIndividualCreator[];
  };
  originalissue: {
    resourceURI: string;
    name: string;
  };
}
