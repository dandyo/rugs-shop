import { Link } from "react-router-dom";

function AdminHome() {

    return <>
        <div className="container-xl">
            <h1>Rugs</h1>
            <Link to="/admin/rugs/add">Add</Link>
        </div>
    </>
}

export default AdminHome;