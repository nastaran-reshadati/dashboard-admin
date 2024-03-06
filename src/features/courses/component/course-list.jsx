import { useLoaderData } from "react-router-dom";
import Course from "./course";

const CourseList = ({ loadedCourses }) => {
  // const loadedCourses = useLoaderData();
  // console.log(loadedCourses);
  return (
    <>
      <div className="row">
        {loadedCourses.map((course) => (
          <div className="col-4" key={course.id}>
            <Course {...course} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
