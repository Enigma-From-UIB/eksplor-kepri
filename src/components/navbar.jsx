import React, {useState} from "react";
import Logo from "../files/logo-kepri-white.svg";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

{/*
    Testing only. This is comment in react
*/}

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='text-white text-2xl mt-10 py-5 max-w-[1240-px] items-center justify-center flex md:justify-between  '>
            <div className="flex items-center justify-center">
                <ul className="hidden md:flex mx-auto relative border-b items-center">
                    <li className="p-8 border-b" onClick={event =>  window.location.href='/home.jsx'}>HOME</li>
                    <li className="p-8">PULAU</li>
                    <li className="p-8">BUDAYA</li>
                    <img src={Logo} className="relative" alt="logo" />
                    <li className="p-8">KULINER</li>
                    <li className="p-8">WISATA</li>
                    <li className="p-8">GAME</li>        
                </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden flex items-center justify-end">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r bg-[#AAC8A2] bg-opacity-90 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <img src={Logo} className="relative" alt="logo" />
                <ul className="pt-12">
                    
                    <li className="p-8 border-b " onClick={event =>  window.location.href='/home.jsx'}>HOME</li>
                    <li className="p-8 border-b ">PULAU</li>
                    <li className="p-8 border-b ">BUDAYA</li>
                    <li className="p-8 border-b ">KULINER</li>
                    <li className="p-8 border-b ">WISATA</li>
                    <li className="p-8 border-b ">GAME</li>  
                </ul>
            </div>
        </div>
    )
}

export default Navbar