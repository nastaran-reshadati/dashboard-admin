import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";
import { useEffect, useRef, useState } from "react";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);

  const ref = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", checkIsClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIsClickOutside);
    };
  }, [show]);

  const checkIsClickOutside = (e) => {
    console.log("e", e.target);
    console.log("ref", ref.current);
    if (show && ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(!show)}>
        <img src={usFlag} alt="english" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a className="dropdown-item fw-bolder" style={{ textAlign: "right" }}>
          <img className="ms-2" src={faFlag} width="20" alt="persian" />
          <span className="align-middle">فارسی</span>
        </a>
        <a className="dropdown-item fw-bolder" style={{ textAlign: "right" }}>
          <img className="ms-2" src={usFlag} width="20" alt="english" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
