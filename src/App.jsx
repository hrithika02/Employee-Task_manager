import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Sidesection from './components/Sidesection';
import Calendar from './components/Calendar';
import Employees from './components/Employees';
import Request from './components/Request';
import Login from './components/Login';
import EmployeesList from './components/EmployeesList';
import TaskManager from './components/TaskManager';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <Nav user={user} />} 

      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={setUser} /> 
            )
          }
        />

        {/* Dashboard Page */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <div className="my-6 mx-20 border-2 rounded-3xl shadow-lg">
                <div className="flex flex-grow-0">
                  <Sidesection user={user} /> 
                 <div className="flex flex-col w-2/3">
                  <Calendar />
                  <TaskManager />
                  </div>
                  <div className="flex flex-col p-6">
                    <Request />
                    <Employees />
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/employees"
          element={
            user ? (
              <div className="my-6 mx-20 border-2 rounded-3xl shadow-lg">
                <div className="flex flex-grow-0">
                  <Sidesection user={user} /> 
                  <EmployeesList />
                </div>
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
