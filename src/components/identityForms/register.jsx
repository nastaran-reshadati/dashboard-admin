import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
              <button type="submit" className="btn btn-lg btn-primary">
                {" "}
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
