import {
  IIndividualCharacter,
  IIndividualComic,
  IIndividualEvent,
  IIndividualStory,
  IThumbnail,
  IUrls,
} from "./common";

export interface ISeries {
  id: "int";
  title: "string";
  description: "string";
  resourceURI: "string";
  urls: IUrls[];
  startYear: "int";
  endYear: "int";
  rating: "string";
  modified: "Date";
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
    items: IIndividualCharacter[];
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

export interface IAllSeries {
  offset: "int";
  limit: "int";
  total: "int";
  count: "int";
  results: ISeries[];
}
