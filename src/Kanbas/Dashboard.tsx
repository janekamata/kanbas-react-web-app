import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/web.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text card-text">
                                Full Stack software developer
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/ds.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        DS3000
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Foundations of Data Science
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/mism.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MISM2510
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Fundamentals of Information Analytics
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/orgb.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ORGB3201
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Organizational Behavior
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/phil.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        PHIL1300
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Knowledge in a Digital World
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/acct.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ACCT1201
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Financial Accounting & Reporting
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/coop.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        COOP3945
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Co-op Work Experience
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={ { width: "260px" } }>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/is.jpg" width="100%" height={ 160 } />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        IS3500
                                    </h5>
                                </div>
                            </Link>
                            <p className="wd-dashboard-course-title card-text">
                                Information System Design & Development
                            </p>
                            <Link className="wd-dashboard-course-button"
                                to="/Kanbas/Courses/1234/Home">
                                <button className="btn btn-primary"> Go </button><br /><br /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
