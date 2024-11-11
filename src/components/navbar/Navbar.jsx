import React from 'react'
import logo from '../../assets/Logo.png'
import Menu from './Menu'

export default function Navbar() {
    return (
        <>
            <div className="navbar sticky top-0 w-[95%] lg:w-4/5 mx-auto justify-between">
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                <div className="lg:navbar-start justify-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Menu />
                            <div className="navbar-end lg:hidden">
                                <a className="btn text-[#0A1425] bg-[#FEBF00] rounded-none border-0 font-bold">BOOK A TABLE</a>
                            </div>
                        </ul>
                    </div>
                    <div className="navbar hidden ml-5 lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white text-base">
                            <Menu />
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex md:flex-end">
                    <a className="btn text-[#0A1425] bg-[#FEBF00] rounded-none border-0 font-bold">BOOK A TABLE</a>
                </div>
            </div>
        </>
    )
}
