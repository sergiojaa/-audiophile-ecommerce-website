import Image from "next/image";
import headphones from './audiimages/headphones.png'
import backgroundImage from './audiimages/bg.png'
import logo from './audiimages/audiophile.png'
import basket from './audiimages/Combined Shape (1).png'
import dinamiki from './audiimages/dinamiki.png'
import rightside from './audiimages/isarimarjvniv.svg'
import dinamiki2 from './audiimages/dinamic2.png'
import aloneIMage from './audiimages/aloneimage.png'
import manImage from './audiimages/mainImage.png'
export default function Home() {
  return (
   <div>
    <div 
    className="h-[600px] bg-black   bg-center relative"
    style={{backgroundImage:`url(${backgroundImage.src})`}}
    >
      <div className="flex items-center justify-around py-[20px] ">
      <div className="">
          <div className="absolute space-y-1">
          <div className="h-[3px] w-[16px] bg-white"></div>
          <div className="h-[3px] w-[16px] bg-white"></div>
          <div className="h-[3px] w-[16px] bg-white"></div>
        </div>
      </div>
      <div className="mt-[20px]">
        <Image src={logo} alt="logo"/>
      </div>
      <div className="mt-[20px]">
        <Image src={basket} alt="basket" />
      </div>
      </div>
      <div className="bg-[#FFFFFF] h-[1px] mt-[20px] "></div>
     <div className="mt-[6rem] flex flex-col items-center justify-center ">
      {/* <Image src={maintext} alt="main text" /> */}
      <h3 className="text-gray-700 text-center "> NEW PRODUCT </h3>
      <h3 className="text-white text-[36px] text-center ">XX99 Mark II
      HeadphoneS</h3>
      <p className="text-[15px] mt-[1rem] text-gray-200 text-center ">
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <div className="mt-[2rem]">
        <button className= " bg-[#D87D4A]  text-[13px] py-[15px] px-[30px]  text-white">SEE PRODUCT</button>
      </div>

     </div>
     
    </div>
    <div className="flex flex-col items-center mt-[4rem] justify-center">
    <div className="w-[300px]  flex flex-col items-center rounded-xl h-[165px]  px-[50px] bg-[#F1F1F1] relative">
    <Image
      src={headphones}
      alt="headphones image"
      className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
    />
    <h3 className="mt-[5rem]" >HEADPHONES</h3>
    <div className="flex">
    <h3>SHOP</h3>
<Image className="ml-[10px]" src={rightside} alt="right side image"/>
    </div>
  </div>
  <div className="w-[300px] mt-[4rem] flex flex-col items-center rounded-xl h-[165px]  px-[50px] bg-[#F1F1F1] relative">
    <Image
      src={headphones}
      alt="headphones image"
      className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
    />
    <h3 className="mt-[5rem]" >HEADPHONES</h3>
    <div className="flex">
    <h3>SHOP</h3>
<Image className="ml-[10px]" src={rightside} alt="right side image"/>
    </div>
  </div>
  <div className="w-[300px] mt-[4rem] flex flex-col items-center rounded-xl h-[165px]  px-[50px] bg-[#F1F1F1] relative">
    <Image
      src={headphones}
      alt="headphones image"
      className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
    />
    <h3 className="mt-[5rem]" >HEADPHONES</h3>
    <div className="flex">
    <h3>SHOP</h3>
<Image className="ml-[10px]" src={rightside} alt="right side image"/>
    </div>
  </div>
    </div>
    <div className="flex flex-col items-center justify-center">
    <div className="bg-[#D87D4A] flex flex-col items-center h-[600px] w-[300px] rounded-xl mt-[5rem] mx-[10px] ">
      <Image className="mt-[4rem]" src={dinamiki} alt="dynamic photo"  />
      <h3 className="flex flex-col items-center text-[36px] mt-[2rem] text-white">ZX9 <span> SPEAKER</span></h3>
      <p className="text-[15px] text-center text-white mt-[1rem]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <button className="bg-black text-white p-[15px] mt-[1rem]">
        SEE PRODUCT
      </button>
</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="relative m-[10px] rounded-xl">
      <Image src={dinamiki2} alt="dynamic image" />
      <div className="absolute translate-y-[-200px] ml-[2rem] ">
        <h3 className="font-bold">ZX7 SPEAKER</h3>
        <button  className="border-2 mt-[1rem] " >SEE PRODUCT</button>
        </div>
        </div>
       
       
        
      </div>
    </div>
    <div className="flex justify-center items-center m-[10px]">
      <Image className="h-[200px] w-[300px]" src={aloneIMage} alt="image" />
    </div>
    <div className="flex justify-center  mt-[2rem]">
    <div className="w-[300px] h-[200px] bg-[#F1F1F1]">
      <div className="flex flex-col items-start">
        <h1>YX1 EARPHONES</h1>
        <button>see product</button>
      </div>
    </div>
    </div>
    <div className="flex mt-[7rem] justify-center items-center">
  <div className="flex flex-col justify-center items-center" >
    <Image className=" w-[300px] h-[300px]  " src={manImage} alt="man photo" />
    <h2 className="text-[28px] w-[280px]">BRINGING YOU THE  <span className="text-orange-500">BEST</span>  AUDIO GEAR</h2>
    <p className="text-[15px] w-[280px] leading-[25px] opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
  </div>
 
</div>
<div className="flex flex-col items-center">
    <h1>audiphile</h1>
    <div>
      <ul>
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>

      </ul>
    </div>
    <div>
      <p className="w-[280px]">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
    </div>
    <div>
      <h4>Copyright 2021. All Rights Reserved</h4>
    </div>
    <div>
      <span>insta</span>
      <span>insta</span>
      <span>insta</span>

    </div>
  </div>

  
   
   </div>
  );
}
