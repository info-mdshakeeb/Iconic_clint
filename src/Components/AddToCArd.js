import React from 'react';

const AddToCArd = () => {
    return (
        <>
            <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
            </div>
        </>
    );
};

export default AddToCArd;