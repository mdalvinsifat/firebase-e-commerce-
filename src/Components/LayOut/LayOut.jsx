import React from 'react';
import Navber from '../Navber/Navber';
import Fotter from '../Fotter/Fotter';

const LayOut = ({children}) => {
    return (
        <div>
            <Navber/>
            <div className="main-content min-h-screen">
                {children}
            </div>
        <Fotter/>
        </div>
    );
};

export default LayOut;