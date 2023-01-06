import React from 'react';

const Table = () => {
    return (
        <div class="flex flex-wrap -mx-3">
            <div class="flex-none w-full max-w-full px-3">
                <div class="relative flex flex-col min-w-0 mb-6 break-words  border-0 border-transparent border-solid shadow-xl   rounded-2xl bg-clip-border">
                    <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6 class="">Authors table</h6>
                    </div>
                    <div class="flex-auto px-0 pt-0 pb-2">
                        <div class="p-0 overflow-x-auto">
                            <table class="items-center w-full mb-0 align-top border-collapse text-slate-500">
                                <thead class="align-bottom">
                                    <tr>
                                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">Author</th>
                                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">Function</th>
                                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">Status</th>
                                        <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none   tracking-none whitespace-nowra opacity-70"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <div class="flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                </div>
                                                <div class="flex flex-col justify-center">
                                                    <h6 class="mb-0 text-sm leading-normal ">John Michael</h6>
                                                    <p class="mb-0 text-xs leading-tight">john@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <p class="mb-0 text-xs font-semibold leading-tight ">Manager</p>
                                            <p class="mb-0 text-xs leading-tight">Organization</p>
                                        </td>
                                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <a href="/" class="text-xs font-semibold leading-tight"> Edit </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;