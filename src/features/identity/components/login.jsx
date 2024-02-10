import { Link } from "react-router-dom";
import LoginForm from "../../../components/identityForms/login";

const Login = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h1>👋</h1>
        <p>جهت ورود لطفا از موبایل و رمز عبور خود استفاده کنید</p>
        <p>
          قبلا ثبت نام نکرده اید ؟
          <Link to="/register" className="me-2">
            ثبت نام کنید
          </Link>
        </p>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
