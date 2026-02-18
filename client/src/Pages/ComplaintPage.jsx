import React, { useState } from "react";

function ComplaintPage() {
  const [complaint, setComplaint] = useState({ category: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setComplaint((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend();
  };

  const sendDataToBackend = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(complaint),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <header>Admin Complaints Page</header>
      <form onSubmit={handleSubmit}>
        <label>Choose Category:</label>
        <select name="category" id="" onChange={handleChange}>
          <option>Choose</option>
          <option value="food">Food</option>
          <option value="equipment">Equipment</option>
          <option value="commands">Commands</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          id="complaint-area"
          placeholder="Type your complaint here"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ComplaintPage;
