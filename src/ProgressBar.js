import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = ((currentStep - 1) / totalSteps) * 100;

    return (
        <div className="ProgressBar">
            <div className="ProgressBarInner" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;