"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [user, setUser] = useState(null); // Тук ще зареждаш данни за потребителя
  const [tasks, setTasks] = useState([]); // Зареждане на последни задачи
  const [fitnessProgress, setFitnessProgress] = useState(0); // Прогрес в фитнеса

  useEffect(() => {
    if (user) {
      fetchTasks();
      fetchFitnessProgress();
    }
  }, [user]);

  const fetchTasks = () => {
    // Зареждаме последни задачи
    setTasks(["Задача 1", "Задача 2"]); // Пример
  };

  const fetchFitnessProgress = () => {
    // Зареждаме прогрес в тренировките
    setFitnessProgress(50); // Пример
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-8">
    <h1 className="text-3xl font-bold text-center mb-4">Добре дошли в приложението!</h1>
    <p className="text-lg text-center mb-8">
      Проследявайте задачите си, правете и следете тренировките си и пазаруването.
    </p>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Задачи</h2>
        <p className="text-gray-700">
          Проследявайте всички задачи, които трябва да изпълните. Можете да ги добавяте, редактирате и премахвате.
        </p>
      </div>
  
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Тренировки</h2>
        <p className="text-gray-700">
          Направете тренировките си по-ефективни и следете напредъка си с помощта на приложението.
        </p>
      </div>
  
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Пазаруване</h2>
        <p className="text-gray-700">
          Преглеждайте и следете продуктите, които сте добавили в пазарската си кошница.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
