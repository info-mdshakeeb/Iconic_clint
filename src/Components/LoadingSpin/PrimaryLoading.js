import React from 'react';
import { ScaleLoader } from "react-spinners";

const PrimaryLoading = ({ height, color }) => {


    return (
        <ScaleLoader color={color}
            height={height}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default PrimaryLoading;