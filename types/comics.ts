import {
  IImage,
  IIndividualCharacter,
  IIndividualCreator,
  IIndividualEvent,
  IIndividualStory,
  ISeriesItem,
  IThumbnail,
  IUrls,
} from "./common";

export interface IComic {
  id: "int";
  digitalId: "int";
  title: "string";
  issueNumber: "double";
  variantDescription: "string";
  description: "string";
  modified: "Date";
  isbn: "string";
  upc: "string";
  diamondCode: "string";
  ean: "string";
  issn: "string";
  format: "string";
  pageCount: "int";
  textObjects: [
    {
      type: "string";
      language: "string";
      text: "string";
    }
  ];
  resourceURI: "string";
  urls: IUrls[];
  series: ISeriesItem;
  variants: [
    {
      resourceURI: "string";
      name: "string";
    }
  ];
  collections: [
    {
      resourceURI: "string";
      name: "string";
    }
  ];
  collectedIssues: [
    {
      resourceURI: "string";
      name: "string";
    }
  ];
  dates: [
    {
      type: "string";
      date: "Date";
    }
  ];
  prices: [
    {
      type: "string";
      price: "float";
    }
  ];
  thumbnail: IThumbnail;
  images: IImage[];
  creators: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualCreator[];
  };
  characters: {
    available: "int";
    returned: "int";
    collectionURI: "string";
    items: IIndividualCharacter[];
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
}

export interface IAllComics {
  offset: "int";
  limit: "int";
  total: "int";
  count: "int";
  results: IComic[];
}
