import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Nav />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
