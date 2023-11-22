import React from "react";
import Logo from "../files/logo-kepri-white.svg";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

{/*
    Testing only. This is comment in react
*/}

const Navbar = () => {
    return (
        <div className='text-white text-2xl mt-10 py-5 max-w-[1240-px] flex items-center justify-center'>
            <ul className="flex mx-auto relative border-b">
                <li className="p-8 border-b" onClick={event =>  window.location.href='/home.jsx'}>HOME</li>
                <li className="p-8">PULAU</li>
                <li className="p-8">BUDAYA</li>
                <img src={Logo} className="relative" alt="logo" />
                <li className="p-8">KULINER</li>
                <li className="p-8">WISATA</li>
                <li className="p-8">GAME</li>        
                
            </ul>
            <div>
                <AiOutlineMenu size={20} />
            </div>
            <div className="hidden fixed left-0 top-0 h-full w--[60%] border-r border-r-gray-900">
            <img src={Logo} className="relative" alt="logo" />
                <ul className="pt-12">
                    
                    <li className="p-8" onClick={event =>  window.location.href='/home.jsx'}>HOME</li>
                    <li className="p-8">PULAU</li>
                    <li className="p-8">BUDAYA</li>
                    <li className="p-8">KULINER</li>
                    <li className="p-8">WISATA</li>
                    <li className="p-8">GAME</li>  
                </ul>
            </div>
        </div>
    )
}

export default Navbar