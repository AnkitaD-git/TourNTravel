import React,{useState} from 'react'
import './navbar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

   const[active, setActive]= useState('navbar');

   const showNav = () =>{
      setActive('navBar activeNavbar')
   }

   const removeNavbar = () =>{
      setActive('navBar')
   }
  return (
    <>
    <section className='navBarSection'>
       <header className='header flex'>
          <div className='logoDiv'>
             <a href="#" className='logo fiex'>
               <h1> <MdOutlineTravelExplore className="icon
               "/> Travel</h1>
             </a>
          </div>

          <div className={active}>
             <ul className='navLists flex'>
               <li className='navItem'>
                  <a href="#" className='navLink'>Home</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>Package</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>Shop</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>About</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>Pages</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>News</a>
               </li>
               <li className='navItem'>
                  <a href="#" className='navLink'>Contact</a>
               </li>

               <button type="button" className='btn'>
               <a href="#">BOOK NOW</a>
               </button>

               <div className='closeNavbar' onClick={removeNavbar}>
               <AiFillCloseCircle className="icon"/>
               </div>
             </ul>
          </div>

          <div className='toggleNavbar' onClick={showNav}>
             <TbGridDots className="icon"/>
          </div>
       </header>
    </section>
    </>
  )
}

export default Navbar