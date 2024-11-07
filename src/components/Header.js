"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Ще определя дали потребителят е влязъл в системата

  const handleLogout = () => {
    // Тук добавяш логика за изход (например изтриване на токен от localStorage)
    setUser(null);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <h1>Моето To-Do приложение</h1>
      </div>
      <button
        className="flex flex-col items-center justify-center w-8 h-8 p-1 rounded ring-2 ring-gray-400 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-3 md:flex md:flex-row md:gap-6 absolute md:static top-16 right-4 bg-gray-800 p-4 rounded md:bg-transparent`}
      >
        <Link href="/" className="hover:text-gray-400">
          Главен списък
        </Link>
        <Link href="/fitness" className="hover:text-gray-400">
          Фитнес
        </Link>
        <Link href="/shopping" className="hover:text-gray-400">
          Пазаруване
        </Link>

      
        {user ? (
          <>
            <Link href="/profile" className="hover:text-gray-400">
              Профил
            </Link>
            <button onClick={handleLogout} className="hover:text-gray-400">
              Логаут
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-gray-400">
              Логин
            </Link>
            <Link href="/register" className="hover:text-gray-400">
              Регистрация
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
