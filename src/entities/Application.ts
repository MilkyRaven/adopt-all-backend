export interface Application {
  id: string;
  createdAt: Date;
  animalId: string;
  userId: string;
  hasYard: boolean;
  hasHadPetsBefore: boolean;
  comments: string;
}
