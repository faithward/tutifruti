import React from "react";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <header class="header sticky bg-slate-300 px-4">
      <nav class="justify-items-start">
        <div>
          <h1>Tuti Fruti :)</h1>
        </div>
        <ul class="flex justify-items-start">
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
    </header>
  );
};

