export interface IUrls {
  type: string;
  url: string;
}

export interface IThumbnail {
  path: "string";
  extension: "string";
}

export interface ISeriesItem {
  resourceURI: "string";
  name: "string";
}
export interface IIndividualComic {
  resourceURI: "string";
  name: "string";
}
export interface IIndividualEvent {
  resourceURI: "string";
  name: "string";
}
export interface IIndividualStory {
  resourceURI: "string";
  name: "string";
  type: "string";
}
