import React from 'react';

const Loader = () => {
    return (
        <div className="fixed bg-black top-0 left-0 z-50 flex justify-center items-center w-full h-screen">
            <img className='h-9' src="./infinite-spinner.svg" alt="" />
        </div>
    );
};

export default Loader;