import React from "react";
import { Link } from "react-router-dom";

const Redirected = () => {
  return (
    <div>
      <div>
        <h5>
          you are being redirected! you need to log into account in order to
          reach those pages
        </h5>
      </div>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default Redirected;
