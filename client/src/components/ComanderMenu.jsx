import { useState } from "react";
import { useNavigate } from "react-router";

function ComanderMenu() {
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  

  function handelChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getTokenFromBackend();
    console.log(result);
    if (result) {
      navigate("/comanderpage");
    }
  };

  const getTokenFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.token) {
        localStorage.setItem("comanderToken", result.token);
        return "success";
      }
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
      return;
    }
  };

  

  return (
    <div className="comander-menu">
      <h2>Commanders only</h2>
      <form className="comander-form" onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" onChange={handelChange} />
        <button type="submit">connect</button>
      </form>
    </div>
  );
}

export default ComanderMenu;
