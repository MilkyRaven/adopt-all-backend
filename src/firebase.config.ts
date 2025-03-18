import { initializeApp, cert } from "firebase-admin/app";
import { firestore, ServiceAccount } from "firebase-admin";

const isTestEnvironment = process.env.NODE_ENV === "test";

let app;
if (isTestEnvironment) {
  app = initializeApp({
    projectId: "test-adopt-all-app",
  });

  console.log("🧪 Usando entorno de pruebas con emulador de Firestore");
} else {
  const serviceAccount = require("../service_account.json");
  app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });
}

export const db = firestore();
