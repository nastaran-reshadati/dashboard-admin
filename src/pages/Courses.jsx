import { httpInterceptedService } from "@core/http-service";
import CourseList from "../features/courses/component/course-list";

const Courses = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <a href="" className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره ی جدید
          </a>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export async function cousesLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
}

export default Courses;
