import React from 'react';
import './index.css'
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Assignments from './Pages/Assignments';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './AdminPages/Login';
import AdminDashboard from './AdminPages/Dashboard'
import AdminQuery from './AdminPages/Query';
import Queryshow from './AdminPages/Queryshow';
import Members from './AdminPages/Members';
import VerifiedMembers from './AdminPages/VerifiedMembers';
import AdminAssignments from './AdminPages/Assignments';
import AssignmentShow from './Pages/AssignmentShow';
import Notices from "./Pages/Notices"
import AdminNotices from "./AdminPages/Notices"

function App() {
  return (
    <>
    {/* <h6 className='text-center bg-gray-200'>BASE TRIAL VERSION 1.11 - UnderDev - ZBYTES 😁</h6> */}
    {/* <h6 className="text-center bg-gray-200 sticky top-0">BASE TRIAL VERSION 1.11 - UnderDev - ZBYTES 😁</h6> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
