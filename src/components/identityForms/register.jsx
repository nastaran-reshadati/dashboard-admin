const RegisterForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-4">
          <form>
            <div className="mb-3">
              <label className="form-label">موبایل</label>
              <input
                type="password"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">رمز عبور</label>
              <input
                type="password"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">تکرار رمز عبور</label>
              <input
                type="password"
                className="form-control form-control-lg mb-2"
              />
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
