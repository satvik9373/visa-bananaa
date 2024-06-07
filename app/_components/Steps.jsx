import React from 'react';
import Slider from './Slider';
import VideoSection from './VideoSection';

function Steps() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h2 className='font-bold text-3xl text-center'>
        Our <span className='gradient-text'>3 Step</span> Visa Process
      </h2>
      <hr className="mt-3 w-10 h-1 bg-primary rounded-full" />

      {/* Cards container */}
      <div className="flex flex-wrap justify-center mt-6 space-x-4">
        {/* Card 1 */}
        <div className="flex items-start rounded-lg overflow-hidden shadow-lg bg-white p-6 max-w-xs sm:max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/completed-task.png" alt="Image 1" className="w-16 h-16 mr-4 self-start"/>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-gray-800">Document Verification</p>
            <p className="text-gray-600 mt-2">Upload scanned documents for verification</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start rounded-lg overflow-hidden shadow-lg bg-white p-6 max-w-xs sm:max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/credit-cards-payment.png" alt="Image 2" className="w-16 h-16 mr-4 self-start"/>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-gray-800">Pay Online</p>
            <p className="text-gray-600 mt-2">Process your application payment online</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start rounded-lg overflow-hidden shadow-lg bg-white p-6 max-w-xs sm:max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <img src="/passport.png" alt="Image 3" className="w-16 h-16 mr-4 self-start"/>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-gray-800">Get Your Visa</p>
            <p className="text-gray-600 mt-2">Download your approved visa through mail or through your dashboard</p>
          </div>
        </div>
      </div>
      <Slider/>
      <VideoSection/>
    </div>
    
  );
}

export default Steps;
