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
  id: "int";
  title: "string";
  description: "string";
  resourceURI: "string";
  urls: IUrls[];
  modified: "Date";
  start: "Date";
  end: "Date";
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
  series: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: ISeriesItem[];
  };
  characters: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualCharacter[];
  };
  creators: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualCreator[];
  };
  next: {
    resourceURI: "string";
    name: "string";
  };
  previous: {
    resourceURI: "string";
    name: "string";
  };
}
export interface IAllEvents {
  offset: "int";
  limit: "int";
  total: number;
  count: "int";
  results: IEvent[];
}
