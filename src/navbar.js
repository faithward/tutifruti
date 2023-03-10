import React from "react";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
<div class="shadow bg-tan">
  <div class="h-16 mx-auto px-5 flex items-center justify-between">
      <a class="text-2xl hover:text-darkblue transition-colors cursor-pointer">Tuti Fruti</a>
      
      <ul class="flex items-center gap-5">
        <li><a class="hover:text-darkblue transition-colors" href="">Home</a></li>
        <li><a class="hover:text-darkblue transition-colors" href="">About Us</a></li>
        <li><a class="hover:text-darkblue transition-colors" href="">Shop</a></li>
        <li><a class="hover:text-darkblue transition-colors" href="">Donate</a></li>
        <li><a class="hover:text-darkblue transition-colors" href="">Instagram</a></li>
      </ul>
  </div>
</div>
  );
};

