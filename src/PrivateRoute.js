import { AuthContext } from './AuthContext'
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import AdminHeader from './components/admin/Header';
import AdminFooter from './components/admin/Footer';
import AdminSidebar from './components/admin/Sidebar';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return <>
        <AdminHeader />
        <div className='container-xl py-4 py-md-5'>
            <div className='row'>
                <AdminSidebar />
                <div className='col-md-8'>{children}</div>
            </div>
        </div>
        <AdminFooter />
    </>;
};

export default PrivateRoute;