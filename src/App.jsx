import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/heroStyles.css";
import LogIn from "./pages/log-in/LogIn";
import IndividualDriver from "./landing/IndividualDriver";
import FleetDriver from "./landing/fleet-driver/FleetDriver";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndividualDriver />} />
          <Route path="/fleet-driver" element={<FleetDriver />} />
          <Route
            path="/log-in"
            element={
              <LogIn
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                handleEmailChange={handleEmailChange}
                handlePhoneChange={handlePhoneChange}
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ForgotPassword
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                handleEmailChange={handleEmailChange}
                handlePhoneChange={handlePhoneChange}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
