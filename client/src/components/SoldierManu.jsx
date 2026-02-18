import { Route, Routes, Link } from "react-router";
import ComplaintPage from "../Pages/ComplaintPage";
import HomePage from "../Pages/HomePage";

function SoldierManu() {
  return (
    <div className="soldier-menu">
      <h2>Anonymous complaint box at a military base</h2>
      <h3>Submit a complaint anonymously and appropriately</h3>
      <Link to="/complaintpage">Send Complaint</Link>
    </div>
  );
}

export default SoldierManu;
