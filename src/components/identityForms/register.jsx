import { useForm } from "react-hook-form";
import {
  useActionData,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { httpService } from "../../core/http-service";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const submitForm = useSubmit();
  const navigation = useNavigation();
  const isSuccessAction = useActionData();
  const navigate = useNavigate();

  // const { error, isError, message } = useRouteError();
  const routeError = useRouteError();
  console.log("routeError : ", routeError?.response.data);

  const isSubmitting = navigation.state !== "idle";
  const onSubmit = (data) => {
    const { confirmPassword, ...userDatas } = data;
    submitForm(userDatas, { method: "post" });
  };

  useEffect(() => {
    if (isSuccessAction) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [isSuccessAction]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">موبایل</label>
              <input
                type="password"
                {...register("mobile", {
                  required: "موبایل الزامی است",
                  minLength: 11,
                  maxLength: 11,
                })}
                className={`form-control form-control-lg mb-2 ${
                  errors.mobile && "is-invalid"
                }`}
              />
              {errors.mobile && errors.mobile.type == "required" && (
                <p className="text-danger small fw-bolder mt-1">
                  {errors.mobile?.message}
                </p>
              )}
              {errors.mobile &&
                (errors.mobile.type === "minLength" ||
                  errors.mobile.type === "maxLength") && (
                  <p className="text-danger small fw-bolder mt-1">
                    شماره موبایل باید 11 رقم باشد
                  </p>
                )}
            </div>
            <div className="mb-3">
              <label className="form-label">رمز عبور</label>
              <input
                type="password"
                {...register("password", {
                  required: "رمز عبور الزامی است",
                })}
                className={`form-control form-control-lg mb-2 ${
                  errors.password && "is-invalid"
                }`}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-danger small fw-bolder mt-1">
                  {errors.password?.message}{" "}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">تکرار رمز عبور</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "تکرار رمز عبور الزامی است",
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "رمز عبور و تکرار رمز عبور باید یکسان باشند";
                    }
                  },
                })}
                className={`form-control form-control-lg mb-2 ${
                  errors.confirmPassword && "is-invalid"
                }`}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.confirmPassword?.message}{" "}
                  </p>
                )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === "validate" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.confirmPassword?.message}{" "}
                  </p>
                )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-lg btn-primary"
              >
                {/* {isSubmitting ? " در حال ارسال درخواست" : "ثبت نام"} */}
                {t("register.register")}
              </button>
            </div>
            {isSuccessAction && (
              <div className="alert alert-success text-success p-2 mt-3">
                عملیات با موفقیت انجام شد.به صفحه ی ورود منتقل می شوید...
              </div>
            )}
            {routeError && (
              <div className="alert alert-danger text-danger p-2 mt-3">
                {routeError.response?.data.map((error) => (
                  <p className="mb-0">{error.description}</p>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

export async function registerAction({ request }) {
  let formData = await request.formData();
  console.log("form data get", formData.get("password"));
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  console.log("response", response);
  return response.status === 200;
}
