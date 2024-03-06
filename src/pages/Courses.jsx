import { httpInterceptedService } from "@core/http-service";
import CourseList from "../features/courses/component/course-list";
import { Await, defer, useLoaderData } from "react-router-dom";
import CoursesCategories from "./course-categories";
import { Suspense } from "react";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <a href="" className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره ی جدید
          </a>
        </div>
        <Suspense fallback={<p> در حال دریافت دیتا ...</p>}>
          <Await
            resolve={data.courses}
            errorElement={<p>Error loading package location!</p>}
          >
            {(loadedCourses) => <CourseList loadedCourses={loadedCourses} />}
          </Await>
        </Suspense>
        {/* <CourseList /> */}
      </div>
    </div>
  );
};

export async function cousesLoader() {
  return defer({
    courses: loadCourses(),
  });
  // const response = await httpInterceptedService.get("/Course/list");
  // return response.data;
}

const loadCourses = async () => {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
};
export default Courses;
