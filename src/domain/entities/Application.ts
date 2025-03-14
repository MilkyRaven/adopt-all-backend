export class Application {
  constructor(
    public readonly id: string,
    public readonly createdAt: string,
    public readonly animalId: string,
    public readonly userId: string,
    public readonly hasYard: string,
    public readonly hasHadPetsBefore: string,
    public readonly comments: string
  ) {}
}
