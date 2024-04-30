import React from 'react';
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";


const Header = () => {

  const sliderImages = [
    {
       url: "https://static.bhphotovideo.com/explora/sites/default/files/03-chuck-france-photo-2.jpg",
    },
    {
       url: "https://www.bwillcreative.com/wp-content/uploads/2021/01/BTS-PHOTO-TIPS-THUMBNAIL.jpg",
    },
    {
      url: "https://img.freepik.com/premium-photo/man-sits-desk-front-lamp_808092-2592.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696550400&semt=ais",
    },
  
 ];
  return (
    <div className='bg-white w-full py-24'>
      <div className='md:max-width-[1480px] max-w-[1000px] gap-20 m-auto py-8 grid md:grid-cols-2'>
        <div className=''>
        <div className='flex w-full'>
          <h1 className='text-7xl leading-[80px] font-semibold font-'>"Where <span className='text-amber-400'>Creativity</span> Captures The Moment. "</h1>
        </div>
        <div className='flex w-full flex-col text-center place-items-center'>
          <p className='text-[24px] font-semibold py-4'>CONNECT . COLLABORATE . CREATE</p>
          <button className='bg-black text-[20px] p-4 rounded-full mt-2 font-bold text-white hover:text-black hover:bg-amber-400 hover:cursor-pointer'><Link to="/FormInput">Sign Up</Link></button>
        </div>
        </div>

        <div className='md:order-last order-first sm:m-auto'>
          <SimpleImageSlider
                width={600}
                height={400}
                images={sliderImages}
                showNavs={true}
                showBullets={true}
                />
        </div>

      </div>
    </div>
  )
}

export default Header