import { Location } from "./Location";

export class Animal {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly age: string,
    public readonly image: string,
    public readonly neutered: boolean,
    public readonly species: string,
    public readonly entryDate: Date,
    public readonly location: Location
  ) {}
}
