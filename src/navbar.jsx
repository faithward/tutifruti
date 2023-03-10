import React from "react";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <nav>
      <div>
        <h1>Tuti Fruti</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
      </ul>
    </nav>
  );
};

