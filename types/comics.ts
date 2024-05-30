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
  id: number;
  digitalId: number;
  title: string;
  issueNumber: "double";
  variantDescription: string;
  description: string;
  modified: "Date";
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [
    {
      type: string;
      language: string;
      text: string;
    }
  ];
  resourceURI: string;
  urls: IUrls[];
  series: ISeriesItem;
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collections: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collectedIssues: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  dates: [
    {
      type: string;
      date: "Date";
    }
  ];
  prices: [
    {
      type: string;
      price: "float";
    }
  ];
  thumbnail: IThumbnail;
  images: IImage[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualCreator[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: IIndividualCharacter[];
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
}

export interface IAllComics {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IComic[];
}
