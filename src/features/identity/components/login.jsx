import { Link } from "react-router-dom";
import LoginForm from "../../../components/identityForms/login";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-center mt-4">
        <h1>👋</h1>
        <p> {t("login.introMessage")} </p>
        <p>
          {t("login.areNotRegistered")}

          <Link to="/register" className="me-2">
            {t("login.register")}
          </Link>
        </p>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
