import React, {useState} from "react";
import Logo from "../files/logo-kepri-white.svg";
import { Link } from 'react-router-dom';
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
        <div className='text-white text-2xl mt-10 py-5 items-center justify-between flex md:justify-center  '>
            <div className="flex items-center flex-shrink ">
                <ul className="hidden md:flex mx-auto relative items-center">
                    <li className="p-8 border-b">
                        <Link to="/home">HOME</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/pulau">PULAU</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/budaya">BUDAYA</Link></li>
                    <img src={Logo} className="relative" alt="logo" />
                    <li className="p-8 border-b">
                        <Link to="/kuliner">KULINER</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/wisata">WISATA</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/game">GAME</Link></li>     
                </ul>
            </div>
            <div className="flex-grow md:hidden md:flex items-center justify-self-start">
                <img src={Logo} className="object-scale-down h-20 pl-4" alt="logo" />
            </div>
            <div onClick={handleNav} className="block md:hidden flex items-center justify-end flex-shrink pr-4">
                {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30} />}
            </div>
            <div className={`fixed left-0 top-0 h-full w-[60%] border-r bg-[#AAC8A2] bg-opacity-90 ease-in-out duration-500 ${nav ? '' : 'hidden'}`}>
                <img src={Logo} className="relative" alt="logo" />
                <ul className="pt-12">
                <li className="p-8 border-b">
                        <Link to="/home">HOME</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/pulau">PULAU</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/budaya">BUDAYA</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/kuliner">KULINER</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/wisata">WISATA</Link></li>
                    <li className="p-8 border-b">
                        <Link to="/game">GAME</Link></li>  
                </ul>
            </div>
        </div>
    )
}

export default Navbar