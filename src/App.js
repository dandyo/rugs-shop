import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './pages/Home';
// import Shop from './pages/Shop';
import Login from './pages/Login';
import AdminHome from './pages/admin/Home';
import RugsAdd from './pages/admin/RugsAdd';
import AdminTest from './pages/admin/Test';

function App() {
  useEffect(() => {
    document.title = 'Organic Looms';
  }, []);

  return (
    <div className="App">
      <Router basename='organiclooms/app'>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path='/admin' element={<PrivateRoute><AdminHome /></PrivateRoute>} />
            <Route path='/admin/rugs/add' element={<PrivateRoute><RugsAdd /></PrivateRoute>} />
            <Route path='/admin/test' element={<PrivateRoute><AdminTest /></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;