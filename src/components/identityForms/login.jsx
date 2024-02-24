import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  redirect,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { httpService } from "@core/http-service";

const LoginForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = useSubmit();
  const navigation = useNavigation();
  const routeError = useRouteError();
  const isSubmitting = navigation.state !== "idle";

  console.log(routeError?.response.data.map((error) => error.description));

  const onSubmit = (data) => {
    console.log(data);
    submitForm(data, { method: "POST" });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">{t("login.mobile")}</label>
              <input
                type="password"
                className={`form-control form-control-lg mb-2 ${
                  errors.mobile && "is-invalid"
                }`}
                {...register("mobile", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
              />
              {errors.mobile && (
                <p className="text-danger small fw-bolder mt-1">
                  {t("login.validation.mobileRequired")}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">{t("login.password")}</label>
              <input
                type="password"
                className={`form-control form-control-lg mb-2 ${
                  errors.password && "is-invalid"
                }`}
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-danger small fw-bolder mt-1">
                  {t("login.validation.passwordRequired")}{" "}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-lg btn-primary"
              >
                {isSubmitting ? t("login.signingin") : t("login.signin")}
              </button>
            </div>
            {routeError && (
              <div className="alert alert-danger text-danger p-2 mt-3">
                {routeError.response?.data.map((error) => (
                  <p className="mb-0">{t(`login.validation.${error.code}`)}</p>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export async function loginAction({ request }) {
  console.log(request);
  let formData = await request.formData();
  const mobile = formData.get("mobile");
  const password = formData.get("password");
  const data = Object.fromEntries(formData);
  // const response = await httpService.post("/Users/login", { mobile, password });
  const response = await httpService.post("/Users/login", data);
  if (response.status === "200") {
    localStorage.setItem("token", response?.data.token);
  }
  return redirect("/");
}
export default LoginForm;
