import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

// ADD LOGIC TO THE HAMBURGER BUTTON

const Nav = () => {
    return (
        <header className='py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={129}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='leading-normal text-md text-slate-400'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav