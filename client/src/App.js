import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Toggle } from "./components/Toggle";
import { PassReset } from "./components/Pass-Reset";
import { useCookies } from "react-cookie";
import { Home } from "./pages/Home"; 


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const accessToken = cookies.accessToken;
  const username = cookies.username;
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const resetPassword = () => {
      setCurrentForm('reset');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={
            <div className="login-page">
               <Header />
              <div className="auth-form-container">
                <div className="auth-form-header">
                  <div className="auth-header-outline">

                    {
                      currentForm === 'login' ? (
                        <><h2>Log in</h2> <p className="aurebesh-font">Log In</p></>
                      ) : currentForm === 'register' ? (
                        <><h2>Register</h2> <p className="aurebesh-font">Register</p></>
                      ) : (
                        <><h2>Reset Password</h2> <p className="aurebesh-font">Reset Password</p></>
                      )
                    }
                  </div>
                </div>
                
                {
                  currentForm === 'login' ? (
                    <Login onFormSwitch={toggleForm} />
                  ) : currentForm === 'register' ? (
                    <Register onFormSwitch={toggleForm} />
                  ) : (
                    <PassReset onFormSwitch={toggleForm} />
                  )
                }
                <Toggle onFormSwitch={toggleForm} currentForm={currentForm} resetPassword={resetPassword} />
                { currentForm !== 'reset' && <p className="hyperlink" onClick={resetPassword}>Forgot Password? Click <span>here</span> to reset.</p>}
              </div>
            </div>
          } />

          <Route path="/home" element={
            accessToken ? <Home /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
