import React from 'react';

const BodyTemplate = ({ children }) => {
    return (
        <div className="bg-slate-50">
            <div className='h-full min-h-[calc(100vh_-_370px)] container px-3 md:px-4 mx-auto '>
                <div className={`py-4`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BodyTemplate;