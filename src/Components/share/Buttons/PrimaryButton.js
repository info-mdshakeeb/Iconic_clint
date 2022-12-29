import React from 'react';

const Button = ({ children }) => {
    // console.log(button);
    return (
        <button class="relative group overflow-hidden px-4  rounded-full flex space-x-2 items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:to-blue-700">
            <span class="relative text-sm font-bold text-white">{children}</span>
            <div class="flex items-center -space-x-3 translate-x-3">
                <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </button>
    );
};

export default Button;