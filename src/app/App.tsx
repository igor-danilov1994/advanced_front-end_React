import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "app/provider/ThemeProvider";

import { MainPageAsync } from "pages/MainPage";
import { AboutAsync } from "pages/AboutPage";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>

      <button onClick={toggleTheme}>Change theme</button>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
