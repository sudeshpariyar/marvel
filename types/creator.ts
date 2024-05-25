import {
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface IAllCreators {
  offset: "int";
  limit: "int";
  total: "int";
  count: "int";
  results: ICreator[];
}
export interface ICreator {
  id: "int";
  firstName: "string";
  middleName: "string";
  lastName: "string";
  suffix: "string";
  fullName: "string";
  modified: "Date";
  resourceURI: "string";
  urls: IUrls[];
  thumbnail: IThumbnail;
  series: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: ISeriesItem[];
  };
  stories: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualStory[];
  };
  comics: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualComic[];
  };
  events: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualEvent[];
  };
}
