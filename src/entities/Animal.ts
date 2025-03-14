import { Location } from "./Location";

export interface Animal {
  id: string;
  name: string;
  description: string;
  age: string;
  image: string;
  neutered: boolean;
  species: string;
  entryDate: Date;
  location: Location;
}
