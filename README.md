# REST API with Mongoose and Express

This project is a REST API that interacts with a database using Mongoose and Express.

## Prerequisites

Before starting, make sure you have the following:

- Node.js installed
- A MongoDB database (either locally or using Mongo Atlas)
- [Postman](https://www.postman.com/) installed (for testing the API)

## Getting Started

1. Start a new Node.js project with `npm init`
2. Install the required packages:

   ```sh
   npm install express mongoose dotenv
   ```
3. Configure the environment variables by creating a .env file at the root of your project:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/my-database

4. Create a config folder and move the .env file into it.
5. Create a models folder and a User.js file inside it.
6. Define a Mongoose schema for the User model inside the User.js file and export it.
7. In the server.js file, set up a server with Express and connect to the database. 
8. Create four routes in `server.js`: `GET`, `POST`, `PUT`, and `DELETE`.
9. Use Mongoose methods to manipulate data and return responses in each route.
10. Test each route using Postman.

---
# Conclusion
The instructions provide a step-by-step guide to creating a REST API using Mongoose and Express. 
The process involves setting up the project, configuring environment variables, creating a server,
connecting to a database, defining a schema and model, and creating routes to manipulate data. 
The instructions also suggest using Postman to test the API.

