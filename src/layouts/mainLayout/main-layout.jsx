import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log(token);
      navigate("/login");
    }
  }, []);

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
