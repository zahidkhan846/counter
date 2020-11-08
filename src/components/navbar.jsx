import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Total
        <span className="badge badge badge-dark m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};
export default Navbar;
