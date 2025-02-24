import { Divide } from 'lucide-react';
import React from 'react';

const CopyrightYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center item-center p-4 mt-8">
      <p className='text-md text-gray-400'>&copy; {currentYear} Masala Trails&trade; || All Rights Reserved.</p>
    </div>
  );
};

export default CopyrightYear;
