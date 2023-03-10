import React from "react";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <div class="flex mx-auto justify-center bg-slate-300">
      <nav class="justify-start">
        <div>
          <h1>Tuti Fruti :)</h1>
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
    </div>
  );
};

