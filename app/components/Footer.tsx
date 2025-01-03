import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
        <div className='flex flex-col bg-black'>
            {/* 1st div */}
            <div className='grid grid-cols-1 justify-center items-center mt-[80px] gap-[30px] md:grid-cols-5 ml-[30px]'>
                {/* 1st col */}
                 <div className='flex flex-col w-[217px] h-[188px] gap-[16px] text-[#FAFAFA]'>
                    <h1 className='font-bold text-[24px]'>Exclusive</h1>
                    <h2 className='text-[20px] font-semibold'>Subscribe</h2>
                    <h3>Get 10% off your first order</h3>
                    <h4 className='flex'><button className='flex w-[217px] h-[48px] border-[1px] text-[16px] gap-[32px] p-[12px]'>Enter Your Email</button></h4>
 
                 </div>

                 {/* 2nd col */}
                 <div className='flex flex-col w-[175px] h-[180px] gap-[24px] text-[#FAFAFA]'>
                  <h1 className='font-semibold text-[20px]'>Support</h1>
                  <h3>exclusive@gmail.com</h3>
                  <h4>+88015-88888-9999</h4>
                 </div>
                 {/* 3rd col */}
                 <div className='flex flex-col w-[123px] h-[236px] gap-[24px] text-[#FAFAFA]'>
                  <h1 className='font-semibold text-[20px]'>Account</h1>
                  <h2>My Account</h2>
                  <h3>Login / Register</h3>
                  <h4>Cart</h4>
                  <h5>Wishlist</h5>
                  

                 </div>
                 {/* 4th col */}
                 <div className='flex flex-col w-[109px] h-[196px] gap-[24px] text-[#FAFAFA]'>
                  <h1 className='font-semibold text-[20px]'>Quick Link</h1>
                  <h2>Privacy Policy</h2>
                  <h3>Terms of use</h3>
                  <h4>FAQ</h4>
                  <h5>Contact</h5>
                 </div>
                 {/* 5 col */}
                 <div className='flex flex-col w-[198px] h-[210px] gap-[24px] text-[#FAFAFA]'>
                  <h1 className='font-semibold text-[20px]'>Download App</h1>
                  <h2 className='text-[12px]'>Save $3 with App New User Only</h2>
                  <div><Image src={"/images/Qr Code.svg"}alt="code"width={80}height={80}/></div>

                 </div>
                 </div>
                 
            {/* 2nd div */}
            <div className='flex items-center justify-center mt-[75px] gap-[16px] text-[#FFFFFF] border-t-[1px] '>
              <div className='flex w-[337px] h-[24px] gap-[12px]'><Image src={"/images/icon-copyright.svg"}alt="copyright"width={20}height={20}/>Copyright 2022. All right reserved</div>
            </div>
        
        
        
        </div>
        </footer>
      
    
  )
}

export default Footer;



