import React from 'react';
import { useLocation } from 'react-router-dom';

const BodyTemplate = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <div className="bg-slate-50">
            <div className={`h-full min-h-[calc(100vh_-_370px)] container px-3 md:px-4 mx-auto ${pathname === "/dashboard/seller/orders" ? "min-h-[90vh] " : " min-h-[calc(100vh_-_370px)]"}
            ${pathname === "/dashboard/seller/profile" ? "min-h-[90vh] " : " min-h-[calc(100vh_-_370px)]"}
            `}>
                <div className={`py-4`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BodyTemplate;