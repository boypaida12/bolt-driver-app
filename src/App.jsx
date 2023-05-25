import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/heroStyles.css";
import IndividualDriver from "./components/landing/IndividualDriver";
import FleetDriver from "./components/landing/fleet-driver/FleetDriver";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndividualDriver />} />
          <Route path="/fleet-driver" element={<FleetDriver />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
