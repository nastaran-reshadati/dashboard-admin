import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/app-context";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const { language, changeLang } = useContext(AppContext);

  console.log("language", language);

  useEffect(() => {
    document.addEventListener("mousedown", checkIsClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIsClickOutside);
    };
  }, [show]);

  useEffect(() => {
    setShow(false);
  }, [language]);

  const checkIsClickOutside = (e) => {
    // console.log("e", e.target);
    // console.log("ref", ref.current);
    if (show && ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(!show)}>
        <img src={language === "fa" ? faFlag : usFlag} alt="english" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a
          onClick={() => changeLang("fa")}
          className="dropdown-item fw-bolder d-flex items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
        >
          <img className="ms-2" src={faFlag} width="20" alt="persian" />
          <span className="align-middle">فارسی</span>
        </a>
        <a
          onClick={() => changeLang("en")}
          className="dropdown-item fw-bolder d-flex items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
        >
          <img className="ms-2" src={usFlag} width="20" alt="english" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
