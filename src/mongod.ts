import { MongoMemoryServer } from "mongodb-memory-server";

MongoMemoryServer.create()
  .then((mongod: MongoMemoryServer): void => {
    console.log(mongod.getUri());
  })
  .catch((e: Error): void => {
    console.log(e.message);
  });
