import React from "react";
import RegisterForm from "../../../components/identityForms/register";
import IdentityLayouts from "../../../layouts/identityLayouts";
import { Link } from "react-router-dom";
import { httpService } from "../../../core/http-service";

const Register = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h1>👋</h1>
        <p>جهت استفاده از پلتفرم لطفا ثبت نام کنید</p>
        <p>
          قبلا ثبت نام کرده اید ؟
          <Link to="/login" className="me-2">
            وارد شوید
          </Link>
        </p>
      </div>
      <RegisterForm />
    </>
  );
};

export default Register;
