import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"
export default function AssignmentGroupControlButtons() {
    return (
        <div className="float-end">
            <span className="fw-normal me-2">40% of Total</span>
            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
