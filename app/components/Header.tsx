"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'



const Header = () => {
    const [isMenuOpen ,setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header>
    <div className='flex justify-around items-center bg-black text-[#FFFFFF] h-[100px]'>
        <h1>Blog Website</h1>
        <ul className='hidden md:flex gap-[12px]'>
            <Link href="/" className='hover:text-blue-500'><li>Home</li></Link>
            <Link href="/about" className='hover:text-blue-500'><li>About</li></Link>
            <Link href="/menu" className='hover:text-blue-500'><li>Menu</li></Link>
            <Link href="/contact" className='hover:text-blue-500'><li>Contact</li></Link>
            
        </ul>

        <div className='md:hidden' onClick={toggleMenu}>
{isMenuOpen ?<AiOutlineClose size={30}/>:
<AiOutlineMenu size={30}/>

}</div>
</div>


{/* mobile navbar */}
{
  isMenuOpen && (
  <nav className='md:hidden flex flex-col items-center gap-4 bg-black text-white'>
  <Link href="./" className='hover:text-blue-500' onClick={toggleMenu}>Home</Link>
  <Link href="./about"  className='hover:text-blue-500' onClick={toggleMenu}>About</Link>
  <Link href="./products" className='hover:text-blue-500' onClick={toggleMenu}>Blog</Link>
  <Link href="./contact"  className='hover:text-blue-500' onClick={toggleMenu}>Contact</Link>
  </nav>
  )
  }
</header>


      
   
  )
}

export default Header
