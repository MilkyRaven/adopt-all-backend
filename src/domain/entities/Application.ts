export class Application {
  constructor(
    public readonly id: string,
    public readonly animalId: string,
    public readonly userId: string,
    public readonly fullName: string,
    public readonly email: string,
    public readonly comments: string,
    public readonly createdAt: string
  ) {}
}
