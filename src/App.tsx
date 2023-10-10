import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import MainPage from "./Pages/MainPage";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
    return (
        // Сообщаем приложению об использовании навигации
        <BrowserRouter>
          {/*  Родительский компонент для роутов */}
          <Routes>
              {/* Перечисление роутов */}
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/auth'} element={<AuthPage/>}/>
              {/* Обработка 404 (самым последним роутом) */}
              <Route path={'/*'} element={<MainPage/>}/>
          </Routes>
        </BrowserRouter>
    );
};

export default App;