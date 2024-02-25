import ChangeTheme from "../../../components/change-theme";
import ChangeLanguage from "../../../components/change-language";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/app-context";

const Nav = () => {
  const { toggleSidebar } = useContext(AppContext);

  return (
    <nav className="navbar">
      <a className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="d-flex align-items-center ms-auto gap-3 me-3">
        <ChangeTheme />
        <ChangeLanguage />
      </div>
    </nav>
  );
};

export default Nav;
