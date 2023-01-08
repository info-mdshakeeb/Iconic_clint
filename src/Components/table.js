import React from 'react';

const Table = () => {
    return (
        <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words  border-0 border-transparent border-solid shadow-xl   rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6 className="">Authors table</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-collapse text-slate-500">
                                <thead className="align-bottom">
                                    <tr>
                                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">Author</th>
                                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">Function</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">Status</th>
                                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none   tracking-none whitespace-nowra opacity-70"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <div className="flex px-2 py-1">
                                                <div>
                                                    <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-0 text-sm leading-normal ">John Michael</h6>
                                                    <p className="mb-0 text-xs leading-tight">john@creative-tim.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <p className="mb-0 text-xs font-semibold leading-tight ">Manager</p>
                                            <p className="mb-0 text-xs leading-tight">Organization</p>
                                        </td>
                                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                        </td>
                                        <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                            <a href="/" className="text-xs font-semibold leading-tight"> Edit </a>
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