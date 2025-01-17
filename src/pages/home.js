import React from 'react';

export const Home = () => {
    return (
        <div>
            <div class="grid grid-cols-5 grid-rows-1 gap-2">
                <div class="col-span-3 border-2 border-lightblue border-solid m-2 p-4">
                    <h1 class="text-center text-3xl">What We Do</h1>
                    <p>Tuti Frooooooooot</p>
                    <button class="hover:text-lightblue border-2 border-black border-solid m-8 p-2">Support Us</button>
                    </div>
                <div class="col-span-2 m-2"><h1>Picture TBD</h1><img alt="..." src="cart.jpg"></img></div>
            </div>
            <div>
                <div class="grid grid-cols-4 grid-rows-2 gap-4">
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                    <div class="hover:text-lightblue border-2 border-lightred border-solid m-8 p-8">Photo Placeholder</div>
                </div>
            </div>
            <div>
                <h1 class="text-center text-3xl">Organization Calendar</h1>
                <div class="grid grid-cols-8 grid-rows-1 gap-4">
                    <div class="col-span-2 m-2">
                        <h1 class="text-center text-xl underline">Key</h1>
                    </div>
                    <div class="col-span-6 m-2">
                        <img class="max-h-full" src="may .png" alt="calendar missing :("></img>
                    </div>
                </div>
            </div>
        </div>
    )
};