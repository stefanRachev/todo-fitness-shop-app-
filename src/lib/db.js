// lib/db.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable");
}

let cached = global.mongo || null;

if (cached) {
  console.log("Using cached MongoDB connection");
  return cached;
}

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Не може да се свърже с базата данни");
  } 
}

export default connectToDatabase;
