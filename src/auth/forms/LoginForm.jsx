import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);



  const { login } = useContext(AuthContext);


  const handleLogin = async () => {
    setSuccess(false);
    setFail(false);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // login(data.access_token);       
        login(data);
        setSuccess(true);
      } else {
        console.error("Login failed");
        setFail(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className=" tab-pane fade show active">
      <div className="mb-3">
        <label className="form-label" htmlFor="si-email">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="johndoe"
          required=""
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="si-password">
          Password
        </label>
        <div className="password-toggle">
          <input
            className="form-control"
            type="password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            className="password-toggle-btn"
            aria-label="Show/hide password"
          >
            <input className="password-toggle-check" type="checkbox" />
            <span className="password-toggle-indicator" />
          </label>
        </div>
      </div>
      <div className="mb-3 d-flex flex-wrap justify-content-between">
      </div>
      <div className="mb-3">
      <label className="form-label" htmlFor="su-password-confirm">
       Use those credentials to test the app! <br/> username: atuny0 <br/>password: 9uQFF1Lh
      </label>
    </div>
      <button
        className="btn btn-primary btn-shadow d-block w-100"
        onClick={handleLogin}
      >
        Sign in
      </button>

      {success ? (<div className="success-message">
   Welcome, Login Sucessful!
</div>) : (<></>) } 
{fail ? (<div className="success-red">
        Login failed
</div>) : (<></>) } 
    </div>
  );
};

export default LoginForm;

