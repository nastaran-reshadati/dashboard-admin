import { createContext, useEffect, useReducer, useTransition } from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();

const initialState = { language: localStorage.getItem("language") || "fa" };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  const changeLang = (language) => {
    console.log(language);
    dispatch({ type: "CHANGE_LANG", payload: language });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr";
    console.log(document.body.dataset.direction);
  }, [state.language]);

  return (
    <AppContext.Provider value={{ ...state, changeLang }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
