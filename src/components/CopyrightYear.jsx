import { Divide } from 'lucide-react';
import React from 'react';

const CopyrightYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center item-center p-4 mt-8">
      <p className='text-xl text-white'>&copy; {currentYear} Masala Trails || All rights reserved.</p>
    </div>
  );
};

export default CopyrightYear;
