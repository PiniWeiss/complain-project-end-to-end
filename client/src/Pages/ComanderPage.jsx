import React, { useEffect, useState } from "react";

function ComanderPage() {
const [complaints, setComplaints] = useState([]);


useEffect(() => {
       async function fetchData() {
          const res = await fetch("http://localhost:8000/api/complaints", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("comanderToken")}`,
            },
          });
          const data = await res.json();
          setComplaints(data);
        }
    
    fetchData();
  }, [complaints]);


  return (
    <div>
      {complaints.map((complaint) => {
        return (
          <div key={complaint._id} className="complaint-card">
            <h3>{complaint.category}</h3>
            <p>{complaint.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ComanderPage;
