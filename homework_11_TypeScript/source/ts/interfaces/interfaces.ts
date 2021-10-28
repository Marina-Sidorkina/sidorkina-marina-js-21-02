export interface IPages {
  [key: string]: string | null
}

export interface IPerson {
  [key: string]: string
}

export interface IResponse {
  results: IPerson[],
  previous: string,
  next: string
}
