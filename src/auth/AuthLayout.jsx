import React, { useState } from "react";
import LoginForm from "./forms/LoginForm";
import Register from "./forms/SigninFrom";

const AuthLayout = () => {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-secondary">
            <ul className="nav nav-tabs card-header-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link fw-medium active"
                  href="#signin-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  onClick={() => {setActiveTab(true)}}
                >
                  <i className="ci-unlocked me-2 mt-n1" />
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-medium"
                  href="#signup-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="ci-user me-2 mt-n1" />
                  Sign up
                </a>
              </li>
            </ul>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body tab-content py-4">
            {activeTab && (<LoginForm />)}
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
