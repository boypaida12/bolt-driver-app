import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./components/heroStyles.css";
import LogIn from "./pages/log-in/LogIn";
import IndividualDriver from "./landing/IndividualDriver";
import FleetDriver from "./landing/fleet-driver/FleetDriver";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("dashboard");
    } catch (err) {
      console.log(err);
    }
    console.log("credentials gone");
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("dashboard");
    } catch (err) {
      console.log(err);
    }
    console.log("credentials gone");
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    console.log("logged out");
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
    // console.log("credentials gone")
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <IndividualDriver
              signUp={signUp}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
            />
          }
        />
        <Route
          path="fleet-driver"
          element={
            <FleetDriver
              signUp={signUp}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
            />
          }
        />
        <Route
          path="log-in"
          element={
            <LogIn
              handleEmailChange={handleEmailChange}
              handlePhoneChange={handlePhoneChange}
              handlePasswordChange={handlePasswordChange}
              signIn={signIn}
              email={email}
              password={password}
              phone={phone}
              signInWithGoogle={signInWithGoogle}
            />
          }
        />
        <Route
          path="forgot-password"
          element={
            <ForgotPassword
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              handleEmailChange={handleEmailChange}
              handlePhoneChange={handlePhoneChange}
              handlePasswordChange={handlePasswordChange}
            />
          }
        />
        <Route
          path="dashboard"
          element={
            user ? (
              <Dashboard logOut={logOut} user={user} />
            ) : (
              <Navigate to="/log-in" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
