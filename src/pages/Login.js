import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import axios from "axios"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to='/' replace />
    }

    const API = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: false,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            const res = await API.post('api/user.php', {
                email, password
            }).then(res => {
                if (res.data.success) {
                    const data = res.data;
                    setEmail('');
                    setPassword('');
                    localStorage.setItem("token", data.token);
                    setIsAuthenticated(true);
                    <Navigate to='/' replace />
                } else {
                    console.log('incorrect submission');
                    setError(res.message);
                }
            })
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return <>
        <div className="login-wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5">
                        <h1 className="text-center mb-4">Login</h1>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group mb-3 form-floating">
                                <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label>Email</label>
                            </div>
                            <div className="form-group mb-3 form-floating">
                                <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <label>Password</label>
                            </div>
                            <button className="btn btn-primary btn-lg w-100 mb-3">Login</button>
                            {error && <div className='mb-3'>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;