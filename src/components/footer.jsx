import React from 'react';
import Logo from "../files/logo-kepri-white.svg";
import {FaGithub, FaArrowUp, FaRegEnvelope} from 'react-icons/fa';
import ScrollButton from '../assets/scrollButton';
import { Link } from 'react-router-dom';

export default function footer() {
  return (
    <footer className=" dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                    <img src={Logo} className="h-8 me-3 " alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ENIGMA</span>
                </div>
            </div>
            <div className="grid">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Our Team</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-1">
                            <a href='https://www.instagram.com/apipaa_a/' className='hover:underline'>Zaynulia Afifa 2331033</a>
                        </li>
                        <li className="mb-1">
                            <a href='https://www.instagram.com/cristinehkm/' className='hover:underline'>Cristine Mulia Hakim 2331128</a>
                        </li>
                        <li className="mb-1">
                            <a href='https://www.instagram.com/hln_fb/' className='hover:underline'>Helen Febriana 2331046</a>
                        </li>
                        <li className="mb-1">
                            <a href='https://www.instagram.com/styvenzhuo_/' className='hover:underline'>Styven Zhuo 2331165</a>
                        </li>
                        <li className="mb-1">
                            <a href='https://www.instagram.com/exceeelllll_/' className='hover:underline'>Excel Stivansyah 2331163</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 ENIGMA. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
                <span className="text-l font-semibold dark:text-white">CONTACT US</span>
                <a href="mailto:weareenigma@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaRegEnvelope />
                </a>
                <a href="https://github.com/Enigma-From-UIB" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaGithub />
                </a>
                <div className='pl-5'>
                    <ScrollButton />
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}
