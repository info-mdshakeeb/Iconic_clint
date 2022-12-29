import React from 'react';

const Button = ({ value, children }) => {
    // console.log(button);
    return (
        <button className=" btn btn-sm rounded-3xl bg-slate-600  w-32">
            {children}
            <div className="">{value}</div>
        </button>
    );
};

export default Button;