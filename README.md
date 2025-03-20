# Adopt All Backend API 🐷🐶🐱

This is the backend API for the Adopt All application, a platform designed to facilitate animal adoption processes.

## Overview

The Adopt All Backend API is built using Express.js and TypeScript, following a clean architecture pattern with domain-driven design principles. It uses Firebase Firestore as the database.

## API Endpoints

The API provides the following main endpoints:

### Health Check
- `GET /health` - Check if the API is running

### User Endpoints
- `GET /user/:userId` - Get user information by ID

### Animal Endpoints
- `GET /animals` - Get all available animals

### Application Endpoints
- `GET /applications/:userId` - Get all applications for a specific user
- `POST /applications` - Create a new adoption application
- `PUT /applications/:applicationId` - Update an existing application
- `DELETE /applications/:applicationId` - Delete an application

## Deployment

This API is deployed on Railway. The deployment URL is available through Postman.

## Getting Started Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (see `.env.example` if available)
4. Run the development server:
   ```
   npm run dev
   ```

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Firebase Admin SDK
- Firebase Firestore

## API Documentation

For detailed API documentation, including request/response formats and authentication requirements, please refer to the Postman collection.

---

**Note:** To access the API deployment URL and Postman collection, please contact me!
