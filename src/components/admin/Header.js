import { useContext } from "react";
import { AuthContext } from "../../AuthContext";


function AdminHeader() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return <>
        <header>
            <div className="container-xl">
                <h1>Header</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    </>
}

export default AdminHeader;