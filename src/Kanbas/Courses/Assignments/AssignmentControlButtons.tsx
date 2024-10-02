import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <FaCheckCircle className="position-relative me-4 fs-4" style={ { color: "green" } } />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}