import React from 'react';

const Loader = () => {
    return (
        <div className="fixed bg-black top-0 left-0 z-50 flex justify-center items-center w-full h-full">
            <img className='h-10' src="./infinite-spinner.svg" alt="" />
        </div>
    );
};

export default Loader;