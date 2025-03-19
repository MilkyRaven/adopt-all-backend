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
  const serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  } as ServiceAccount;
  app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });
}

export const db = firestore();
