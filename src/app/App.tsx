import "./styles/index.scss";
import { useTheme } from "app/provider/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
