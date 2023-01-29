import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link className='text-white font-semibold' to='/'>Home</Link></li>

        <li><Link className='text-white font-semibold' to='/login'>Login</Link></li>
    </React.Fragment>


    return (
        <div className="navbar h-20 mb-12 bg-gradient-to-br from-blue-900 to-purple-500 flex justify-between">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                {/* <img className='logo-size' src={logo} alt="" /> */}
                <h2 className='text-green-500 font-bold logo-text'>Showpiece <span className='text-secondary font-bold'>Zone</span></h2>

            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        

    </div>
    );
};

export default Navbar;