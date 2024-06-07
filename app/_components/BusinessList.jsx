import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Steps from './Steps';

function BusinessList({ businessLists }) {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[32px]'>
          Popular <span className='gradient-text'>Destinations</span>
        </h2>
        <Button className='ml-auto bg-gray-200 text-black px-4 py-2 rounded-md'>Get Started</Button>
      </div>
      <hr className="mt-1 w-10 h-2 bg-primary rounded-full" />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
        {businessLists.map((business, index) => (
          <div key={index} className='shadow-md rounded-lg'>
            <Image
              src={business.images[0].url}
              alt={business.name}
              width={500}
              height={200}
              className='h-[150px] md:h-[200px] object-cover rounded-lg'
            />
            <div className='flex flex-col items-baseline p-3'>
              <div className='flex justify-between w-full'>
                <h2 className='font-bold bg-white rounded-full text-lg'>{business.name}</h2>
                <h2 className='text-right font-bold'>{business.pricing}</h2>
              </div>
              <h2 className='font-medium'>
                Get By <span className='text-pink-600'>{business.receivingDate}</span>
              </h2>
            </div>
          </div>
          
        ))}
      </div>
      <Steps/>
    </div>
  );
}

export default BusinessList;
