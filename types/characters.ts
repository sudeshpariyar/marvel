import {
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface ICharacter {
  id: "int";
  name: "string";
  description: "string";
  modified: "Date";
  resourceURI: "string";
  urls: IUrls[];
  thumbnail: IThumbnail;
  comics: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualComic[];
  };
  stories: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualStory[];
  };
  events: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualEvent[];
  };
  series: {
    available: "int";
    returned: "int";
    collectionURI: "string";
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
