import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {useGsapDownStagger} from  '../hooks/gsap'

const Navbar = () => {
    const li1 = useRef(null)
    const li2 = useRef(null)
    const li3 = useRef(null)
    const logoRef = useRef(null)
    const favRef = useRef(null)

    const liArr = [li1, li2, li3]
    const favArr = [favRef]
    const logoArr = [logoRef]

useGsapDownStagger(liArr, 1)
useGsapDownStagger(logoArr, 1.5)
useGsapDownStagger(favArr, 2)

    return (
        <nav className='navbar wrapper'>
            <ul className='nav-links'>
                <li ref={li1}>
                    <Link to='/featured'>Featured</Link>
                </li>
                <li ref={li2}>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li ref={li3}>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <div className="logo" ref={logoRef}>
                <Link to='/'>Kinjus</Link>
            </div>
            <div className='fav-link' ref={favRef}>
                <Link to='/favourites'>Favourites</Link>
            </div>
        </nav>
    );
};

export default Navbar;