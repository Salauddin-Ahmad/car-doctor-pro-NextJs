// import { connectDB } from "@/lib/connectDB";

// export const POST = async (request) => {
//   const newUser = await request.json();
//   try {
//     const db = await connectDB();
//     const userCollection = db.collection("users");
//     const exist = await userCollection.findOne({ email: newUser.email });
//     if (exist) {
//       return Response.json({ message: "User Already Exist" }, { status: 400 });
//     }
//     const result = await userCollection.insertOne(newUser);
//     return new Response.json({ message: "User Created" }, { status: 200 });
//   } catch (error) {
//     return new Response.json({ message: error.message }, { status: 500 });
//   }
// };




// src/app/signup/route.js
import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return new Response(JSON.stringify({ message: "User Already Exists" }), { status: 400 });
    }

    const result = await userCollection.insertOne(newUser);
    if (result.insertedCount === 1) {
      return new Response(JSON.stringify({ message: "User Created" }), { status: 201 });
    } else {
      return new Response(JSON.stringify({ message: "Failed to create user" }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
};
