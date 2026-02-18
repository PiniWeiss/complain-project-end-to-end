import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router";
import ComplaintPage from "./Pages/ComplaintPage";
import ComanderPage from "./Pages/ComanderPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="complaintpage" element={<ComplaintPage />} />
          <Route path="comanderpage" element={<ComanderPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;