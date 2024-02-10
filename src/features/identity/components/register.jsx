import React from "react";
import RegisterForm from "../../../components/identityForms/register";

const Register = () => {
  return (
    <div className="main d-flex justify-content-center w-100">
      <main className="content d-flex p-0">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1>👋</h1>
                  <p>جهت استفاده از پلتفرم لطفا ثبت نام کنید</p>
                  <p>
                    قبلا ثبت نام کرده اید ؟
                    <a className="me-2" href="#">
                      وارد شوید
                    </a>
                  </p>
                </div>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
