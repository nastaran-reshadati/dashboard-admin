import { createContext, useEffect, useReducer, useTransition } from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();

const initialState = {
  language: localStorage.getItem("language") || "fa",
  theme: localStorage.getItem("theme") || "light",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  const changeLang = (language) => {
    dispatch({ type: "CHANGE_LANG", payload: language });
  };

  const changeTheme = (theme) => {
    console.log(theme);
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr";
    console.log(document.body.dataset.direction);
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ ...state, changeLang, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
