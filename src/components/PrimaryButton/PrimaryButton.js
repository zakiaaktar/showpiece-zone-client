import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-br from-gray-500 to-gray-200 rounded-none mt-3 mb-5 pr-24 pl-24 border-none font-bold">{children}</button>
    );
};

export default PrimaryButton;



