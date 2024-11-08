// app/api/auth/register/route.js

import connectToDatabase from "../../../../lib/db";
import User from "../../../../lib/models/User";

export async function POST(req) {
  await connectToDatabase();

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Моля, попълнете имейл и парола" }),
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Потребителят вече съществува" }),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Паролата трябва да е поне 6 знака" }),
        { status: 400 }
      );
    }

    const newUser = await User.create({ email, password });

    return new Response(
      JSON.stringify({ message: "Регистрацията е успешна", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Грешка при регистрация:", error);
    return new Response(
      JSON.stringify({
        message: "Грешка при регистрацията",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
