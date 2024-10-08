import { FaPlus } from "react-icons/fa6";
import { FaCheckCircle, FaBan } from "react-icons/fa";
export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap d-block mb-3">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger m-1 float-end">
                <FaPlus className="position-relative me-2" style={ { bottom: "1px" } } />
                Module</button>
            <div className="dropdown d-inline m-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <FaCheckCircle className="position-relative me-2"
                        style={ {
                            bottom: "1px",
                            color: "green",
                            backgroundColor: "white",
                            borderRadius: "50%"
                        } }
                    />
                    Publish All</button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#/Kanbas/Courses/1234/Home">
                            <FaCheckCircle className="position-relative me-2" style={ { bottom: "1px", color: "green" } } />
                            Publish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#/Kanbas/Courses/1234/Home">
                            <FaCheckCircle className="position-relative me-2" style={ { bottom: "1px", color: "green" } } />
                            Publish modules only</a>
                    </li>
                    <li id="wd-unpublish-all-modules-and-items">
                        <a id="wd-unpublish-all-modules-and-items-button" className="dropdown-item" href="#/Kanbas/Courses/1234/Home">
                            <FaBan className="position-relative me-2" style={ { bottom: "1px" } } />
                            Unpublish all modules</a>
                    </li>
                    <li id="wd-unpublish-modules-only">
                        <a id="wd-unpublish-modules-only-button" className="dropdown-item" href="#/Kanbas/Courses/1234/Home">
                            <FaBan className="position-relative me-2" style={ { bottom: "1px" } } />
                            Unpublish modules only</a>
                    </li>
                </ul>
            </div>
            <button id="wd-view-progress" className="btn btn-lg btn-secondary m-1 float-end">View Progress</button>
            <button id="wd-collapse-all" className="btn btn-lg btn-secondary m-1 float-end">Collapse All</button>
        </div >
    );
}