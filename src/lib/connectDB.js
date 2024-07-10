// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;
// export const connectDB = async () => {
//     if(db) return db;
//     try {
//         const uri = process.env.NEXT_PUBLIC_MONGODB_URI
//         const client = new MongoClient(uri, {
//           serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//           }
//         });
//         db = client.db();
//         return db;
//     } catch (error) {
//         console.log(error)
//     }
// }



import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = `mongodb+srv://${process.env.NEXT_MONGO_USERNAME}:${process.env.NEXT_MONGO_PASSWORD}@cluster0.iu3pv7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect();
    }
    db = client.db();
    return db;
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw new Error("Failed to connect to the database");
  }
};
