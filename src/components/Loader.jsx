import React from 'react';

const Loader = () => {
    return (
        <div className="fixed bg-[#161515] top-0 left-0 z-50 flex justify-center items-center w-full h-screen">
            <img className="h-80" src="./loader.gif" alt="" />
        </div>
    );
};

export default Loader;