// components/ImageBox.js
import Image from 'next/image';

const ImageBox = () => {
  return (
    <div className="bg-black w-full p-4 text-white mt-20 rounded-lg">
      <h1 className="text-center text-xl mb-4">We are Proudly<span className='text-primary'> <u>Partnered</u></span> with</h1>
      <div className="flex justify-around items-center flex-wrap">
        <div className="mx-1 my-2">
          <Image src="/slider-logo-1.png" alt="Image 1" width={80} height={150} className="rounded-md" />
        </div>
        <div className="mx-1 my-2">
          <Image src="/slider-logo-2.png" alt="Image 2" width={80} height={150} className="rounded-md" />
        </div>
        <div className="mx-1 my-2">
          <Image src="/slider-logo-3.png" alt="Image 3" width={100} height={150} className="rounded-md" />
        </div>
        <div className="mx-1 my-2">
          <Image src="/slider-logo-4.png" alt="Image 4" width={100} height={150} className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
