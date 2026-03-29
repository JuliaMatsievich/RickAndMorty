export interface GetAllCharactersParams {
  page: number;
  name: string | null;
  species: string | null;
  gender: string | null;
  status: string | null;
}

export interface GetAllCharactersResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
