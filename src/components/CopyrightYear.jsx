import { Divide } from 'lucide-react';
import React from 'react';

const CopyrightYear = () => {
  const currentYear = new Date().getFullYear();

  return (     
    <div className="w-full flex justify-center item-center p-2">
      <p className='text-sm md:text-base lg:text-lg text-gray-400'>&copy; {currentYear} <a href='https://masala-trails.vercel.app/'>Masala Trails&trade;</a>. All Rights Reserved.</p>
    </div>
  );
};

export default CopyrightYear;
