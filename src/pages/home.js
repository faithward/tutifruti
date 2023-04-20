import React from 'react';

export const Home = () => {
    return (
        <div>
            <div class="grid grid-cols-5 grid-rows-1 gap-2">
                <div class="col-span-3 border-2 border-lightblue border-solid m-2 p-4">
                    <h1>What We Do</h1>
                    <p>Tuti Frooooooooot</p>
                    <button class="hover:text-lightblue border-2 border-black border-solid m-8 p-2">Support Us</button>
                    </div>
                <div class="col-span-2 m-2"><h1>Picture TBD</h1><img alt="..." src="cart.jpg"></img></div>
            </div>
            <div><h1>Images with Links Grid</h1></div>
            <div><h1>Calendar section</h1></div>
        </div>
    )
};