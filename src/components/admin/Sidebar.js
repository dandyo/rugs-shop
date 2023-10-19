import { Link } from "react-router-dom";

function AdminSidebar() {

    return <>
        <div id="sidebar" className="col-md-4">
            <div className="list-group">
                <Link to="/admin" className="list-group-item">Rugs</Link>
                <Link to="/admin" className="list-group-item">Settings</Link>
            </div>
        </div>
    </>
}

export default AdminSidebar;