import { Location } from "./Location";

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly location: Location
  ) {}
}
