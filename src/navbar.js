import React from "react";

export const Navbar = () => {
    //we have to initiate useNavigate
    //const navigate = useNavigate();

    return (
<header class="header sticky top-0 bg-white shadow-md flex justify-items-start px-8 py-02">
    <h1 class="w-3/12">
        Tuti Fruti
    </h1>

    <nav class="nav font-semibold text-lg">
        <ul class="flex justify-items-start">
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">About Us</a>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Media</a>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Shop</a>
            </li>
            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Donate</a>
            </li>
        </ul>
    </nav>

</header>
    );
};

