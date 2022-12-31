import React from 'react';
import { ScaleLoader } from "react-spinners";
const BodyLoadingScreen = () => {
    const mystyle = {
        color: "white",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',

        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div className="flex justify-center items-center min-h-screen absolute ">
            <ScaleLoader color="DodgerBlue"
                // cssOverride={mystyle}
                height={'20'}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default BodyLoadingScreen;