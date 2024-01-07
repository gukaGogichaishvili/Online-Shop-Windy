import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileEdit = ({ user}) => {
  
  const [editedUser, setEditedUser] = useState({});

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveChanges = () => {
    fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedUser),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        login(updatedUser);
      });
  };

  return (
    <section className="col-lg-8">
      <div className="d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
        <h6 className="fs-base text-light mb-0">
          Update you profile details below:
        </h6>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <i className="ci-sign-out me-2" />
          Sign out
        </button>
      </div>
      {user ? (
        <div>
          <div className="row gx-4 gy-3">
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-fn">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="account-fn"
                defaultValue={user.username}
                name="firstName"
                value={editedUser.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-ln">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                id="account-ln"
                defaultValue={`${user.lastName}`}
                name="lastName"
                value={editedUser.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-email">
                Email Address
              </label>
              <input
                className="form-control"
                type="email"
                id="account-email"
                defaultValue={user.email}
                name="birthDate"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-phone">
                Phone Number
              </label>
              <input
                className="form-control"
                type="text"
                id="account-phone"
                defaultValue="+7 (805) 348 95 72"
                required=""
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-pass">
                New Password
              </label>
              <div className="password-toggle">
                <input
                  className="form-control"
                  type="password"
                  id="account-pass"
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
            <div className="col-sm-6">
              <label className="form-label" htmlFor="account-confirm-pass">
                Confirm Password
              </label>
              <div className="password-toggle">
                <input
                  className="form-control"
                  type="password"
                  id="account-confirm-pass"
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
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <button
                  className="btn btn-primary mt-3 mt-sm-0"
                  type="button"
                  onClick={handleSaveChanges}
                >
                  Update profile
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default ProfileEdit;
