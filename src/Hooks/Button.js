import React from 'react';

const Button = ({ value }) => {
    // console.log(button);
    return (
        <button className=" btn btn-sm rounded-3xl bg-slate-600  w-32">{value}
        </button>
    );
};

export default Button;