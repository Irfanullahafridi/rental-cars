import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="h-20 flex items-center justify-around bg-black bg-opacity-40 text-white sticky">
    <img src={logo} alt="Logo" className="w-20 rounded-full sm:flex justify-start"/>
      <div className="flex items-center">
          <ul className="hidden sm:flex space-x-10 font-mono">
            <li><Link to={'/'} className="hover:text-yellow-400 hover:scale-125 origin-left transition-transform duration-300 inline-block">Home</Link></li>
            <li><Link to={'/Cars'} className="hover:text-yellow-400 hover:scale-125 origin-left transition-transform duration-300 inline-block">Cars</Link></li>
            <li><Link to={'/About'} className="hover:text-yellow-400 hover:scale-125 origin-left transition-transform duration-300 inline-block">About</Link></li>
            <li ><Link to={'/Contact'} className="hover:text-yellow-400 hover:scale-125 origin-left transition-transform duration-300 inline-block">Contact</Link></li>
          </ul>
        </div>
          <div className="hidden sm:flex gap-1 mr-4">
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-5 py-1 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <Link to={'Login'}>LogIn </Link></button> 
     
          <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-5 py-1 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <Link to={'Register'}>Register</Link></button> 
     
          </div>

       
 

          
          <button onClick={() => setIsOpen(!isOpen)} className="space-y-1 group cursor-pointer sm:hidden">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>

          <ul className={` bg-black w-64 h-screen pb-10 absolute top-0 transition-all duration-300 flex flex-col items-center space-y-3 justify-start pt-6 ${isOpen ? 'right-0' : '-right-full'} hidden sm:relative sm:translate-x-full`}>
            <li><Link to={'/'} className="text-white px-4">Home</Link></li>
            <li><Link to={'/Cars'} className="text-white px-4">Cars</Link></li>
            <li><Link to={'/About'} className="text-white px-4">About</Link></li>
            <li ><Link to={'/Contact'} className="text-white px-4">Contact</Link></li>
            <li className="w-fit border border-amber-500 px-4 text-white cursor-pointer rounded-2xl font-serif mt-4">LogIn</li>
          </ul>
         
          </button>
    </header>
    </>
  );
};
export default Header;
