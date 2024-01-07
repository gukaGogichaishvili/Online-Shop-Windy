import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProfileEdit from "./ProfileEdit";
import WishList from "./WishList";
import { ToggleProfilePageContext } from "../context/ToggleProfilePageContext";
import { Link} from "react-router-dom";


const Profile = () => {
  const { generalUserData } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("authData"));
    setUser(userFromLocalStorage);
  }, [generalUserData]);

  const { editPage, setEditPage } = useContext(ToggleProfilePageContext);

  return (
    <>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link to="/products" className="text-nowrap">
                    <i className="ci-home" />
                    Shop
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Profile info
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">

          <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
              <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                <div className="d-md-flex align-items-center">
                  {user && (
                    <div className="ps-md-3">
                      <h3 className="fs-base mb-0">{user.username}</h3>
                      <span className="text-accent fs-sm">{user.email}</span>
                    </div>
                  )}
                </div>
                <a
                  className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0"
                  href="#account-menu"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="ci-menu me-2" />
                  Account menu
                </a>
              </div>
              <div className="d-lg-block collapse" id="account-menu">
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0">
                    <button
                      className={`nav-link-style d-flex align-items-center px-4 py-3 ${
                        !editPage ? "active" : ""
                      }`}
                      onClick={() => {
                        setEditPage(false);
                      }}
                    >
                      <i className="ci-heart opacity-60 me-2" />
                      Wishlist
                    </button>
                  </li>
                </ul>

                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0">
                    <button
                      className={`nav-link-style d-flex align-items-center px-4 py-3 ${
                        editPage ? "active" : ""
                      }`}
                      href="account-profile.html"
                      onClick={() => {
                        setEditPage(true);
                      }}
                    >
                      <i className="ci-user opacity-60 me-2" />
                      Profile info
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          {editPage ? (
            <ProfileEdit user={user}  />
          ) : (
            <WishList  />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
