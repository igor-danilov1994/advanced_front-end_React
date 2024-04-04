import { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutAsync } from "./pages/AboutPage/About.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

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
      {/*<Counter />*/}
    </div>
  );
};
