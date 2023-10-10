import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICar, INumbers } from "../models/models";
import UIButton from "../UIKit/UIButton";

const MainPage = () => {
  const [num, setNum] = useState<number>(0);

  const [cars, setCars] = useState<ICar[]>([]);

  const navigate = useNavigate();

  const getNumber = ({ a, b, c }: INumbers) => {
    // конкатенация
    // Динамическая типизация
    // Неявное преобразование

    // Компонент -> .tsx; Файлы/ Данные / Функции -> .ts
    console.log(a, b, c);
  };

  const addNumber = () => {
    console.log(num);
    // число 0 к строке 1
    const a: number = num + 1;
    const b: string = "num + 2";
    const c: number = num + 3;
    getNumber({ a, b, c });
  };

  const getCars = () => {
    setCars([{ name: "12312", price: 123, year: 123 }]);
  };

  return (
    <div>
      <div>Главная</div>
      {/* Кнопка с навигацией */}
      <div onClick={() => navigate("/auth")}>Авторизация</div>

      <div onClick={() => addNumber()}>Добавить число</div>

      <UIButton onClick={() => navigate("/1")}>Войти</UIButton>
    </div>
  );
};

export default MainPage;
