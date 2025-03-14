import { initializeApp, cert } from "firebase-admin/app";
import { firestore, ServiceAccount } from "firebase-admin";

import serviceAccount from "../service_account.json";
initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const db = firestore();
