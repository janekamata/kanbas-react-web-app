import { FaAlignJustify } from "react-icons/fa";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation } from "react-router";
import PeopleTable from "./People/Table";
import ProtectedRouteEditor from "./ProtectedRouteEditor";
export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      {course && (
        <div>
          <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]}
            {pathname.split("/").length > 5
              ? `> ${pathname.split("/")[5]}`
              : ""}
          </h2>
          <hr />
          <div className="d-flex">
            <div className="d-none d-md-block ">
              <CoursesNavigation />
            </div>
            <div className="flex-fill">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h2>Piazza</h2>} />
                <Route path="Zoom" element={<h2>Zoom</h2>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route
                  path="Assignments/:aid"
                  element={
                    <ProtectedRouteEditor>
                      <AssignmentEditor />
                    </ProtectedRouteEditor>
                  }
                />
                <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                <Route path="Grades" element={<h2>Grades</h2>} />
                <Route path="People" element={<PeopleTable />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
