import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualDriver from "./components/pages/IndividualDriver";
import FleetDriver from "./components/pages/fleet-driver/FleetDriver";
import "./components/heroStyles.css";


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
