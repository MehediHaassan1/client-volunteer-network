import React from "react";
import logo from "../../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = (
        <>
            <li className="mx-2 font-semibold px-1 py-1">
                <Link to="/">Home</Link>
            </li>
            <li className="mx-2 font-semibold px-1 py-1">
                <Link to="/donation">Donation</Link>
            </li>
            <li className="mx-2 font-semibold px-1 py-1">
                <Link to="/events">Events</Link>
            </li>
            <li className="mx-2 font-semibold px-1 py-1">
                <Link to="/blog">Blog</Link>
            </li>
            <li className="mx-2 font-semibold bg-blue-200 px-1 py-1 rounded">
                <Link to="/login">Login</Link>
            </li>
            <li className="mx-2 font-semibold bg-yellow-200 px-1 py-1 rounded">
                <Link to="/admin">Admin</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto p-0 h-12 z-50 sticky top-0">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="logo" className="h-10" />
                </Link>
            </div>

            <div className="navbar-end">
                <ul className=" hidden lg:flex menu menu-horizontal px-1">
                    {navItems}
                </ul>

                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm gap-2 lg:gap-0 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
