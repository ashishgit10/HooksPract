import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const cartProducts=useSelector(state=>state.cart)
    return (
        <div className='bg-blue-400 w-[100%]'>
            <div className='py-3 px-8 flex justify-between max-lg: m-auto'>
                <div>
                    <ul className='flex relative'>
                        <li className='list-none px-3 relative group'>
                            <a href="/">HOME</a>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform ease-in-out origin-bottom scale-x-0 transition-all group-hover:scale-x-90"></span>
                        </li>
                        <li className='relative group'>
                            <NavLink to="/product">PRODUCTS</NavLink>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform ease-in-out origin-bottom scale-x-0 transition-all group-hover:scale-x-100"></span>
                        </li>
                    </ul>
                </div>
                <div>
                <NavLink to="/cart">

                    <span className='relative'>  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="18.5" r="1.5" />
                        <circle cx="9.5" cy="18.5" r="1.5" />
                        <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
                    </svg>
                        <div className='absolute top-[-9px] right-[-14px] bg-red-600 px-1 rounded-md text-white'>{cartProducts.length}</div></span>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar