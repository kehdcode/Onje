import React from 'react';

const AbsoluteWrapper = ({ children}) =>{
    return(
        <div className="postion-absolute w-100">
        {children}
        </div>
    );
}

export default AbsoluteWrapper;