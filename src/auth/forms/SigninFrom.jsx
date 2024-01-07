import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  

  const handleRegister = async () => {
    setSuccess(false);
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          avatar: "https://picsum.photos/800",
        }),
      });

      if (response.ok) {
        console.log("Registration successful");
        setSuccess(true);

      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div
      className="needs-validation tab-pane fade"
      autoComplete="off"
      noValidate=""
      id="signup-tab"
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="su-name">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          id="su-name"
          placeholder="John Doe"
          required=""
          onChange={(e) => setName(e.target.value)}
        />
        <div className="invalid-feedback">Please fill in your name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="su-email" onChange={(e) => setEmail(e.target.value)} >Email address</label>
        <input
          className="form-control"
          type="email"
          id="su-email"
          placeholder="johndoe@example.com"
          required=""
        />
        <div className="invalid-feedback">
          Please provide a valid email address.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="su-password">
          Password
        </label>
        <div className="password-toggle">
          <input
            className="form-control"
            type="password"
            id="su-password"
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
      <button
        className="btn btn-primary btn-shadow d-block w-100"
        onClick={handleRegister}
      >
        Sign up
      </button>

     {success ? (<div className="success-message">
    Registration was successful.
</div>) : (<></>) } 
    </div>
  );
};

export default Register;


