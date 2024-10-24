import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;


    return (
        <div id="wd-assignments" className="me-2">
            <div className="row align-items-center mb-4">
                <AssignmentsControls />
            </div>
            <ul className="list-group rounded-0 d-block">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentGroupControlButtons />
                    </div>
                    <ul id="wd-assignment-list" className="list-group rounded-0">
                        {
                            assignments.filter( ( assignment: any ) => assignment.course === cid ).map( ( assignment: any ) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineAssignment className="me-3 fs-5 text-success" />
                                        <div className="d-flex flex-column">
                                            <a className="wd-assignment-link wd-title" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </a>
                                            <div className="wd-assignment-list-details">
                                                <div><span className="text-danger">{assignment.modules}</span> &nbsp;&nbsp;| &nbsp;&nbsp;<b>Not available until </b>{new Date(assignment.available_date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', hour12:true})} &nbsp;&nbsp;|&nbsp;&nbsp;</div>
                                                <span><b>Due </b> {new Date(assignment.due_date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', hour12:true})} &nbsp;&nbsp;| &nbsp;&nbsp;{assignment.points} pts</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <AssignmentControlButtons />
                                    </div>
                                </li>
                            ) )
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
}
