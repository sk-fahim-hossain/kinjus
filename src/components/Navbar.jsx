import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGsapDownStagger, useGsapMobileMenu } from '../hooks/gsap'

const Navbar = () => {
    const li1 = useRef(null)
    const li2 = useRef(null)
    const li3 = useRef(null)
    const logoRef = useRef(null)
    const favRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const [mobileMenuClick, setMobileMenuClick] = useState(false)

    const liArr = [li1, li2, li3]
    const favArr = [favRef]
    const logoArr = [logoRef]

    useGsapDownStagger(liArr, 1)
    useGsapDownStagger(logoArr, 1.5)
    useGsapDownStagger(favArr, 2)


    useGsapMobileMenu(mobileMenuRef)

    const mobileMenuHandler = (buttonValue) => {
        setMobileMenuClick(buttonValue)
    }

    const mobileMenuOpenStyle = {
        height: mobileMenuClick ? '100%' : 0,
        opacity: mobileMenuClick ? 1 : 0,
        visibility: mobileMenuClick ? 'visible' : 'hidden',
        transform: mobileMenuClick ? 'translateY(-20%)' : 'translateY(0)',
        transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out, height 1s ease-in-out'
    }
    const mobileMenuCloseStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        opacity: mobileMenuClick ? 0 : 1,
        visibility: !mobileMenuClick ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in ,transform 0.8s ease-in-out'
    }

    return (
        <>
            <div className="mobile-menu" ref={mobileMenuRef}>
                <div className="burger-icon-wrapper">

                    <div style={mobileMenuCloseStyle}>
                        <div className="logo" ref={logoRef} >
                            <Link to='/'>Kinjus</Link>
                        </div>


                        <div onClick={() => mobileMenuHandler(true)} className='menu-botton-wrap' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="burger-menu-icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </div>
                    </div>


                    <div style={mobileMenuOpenStyle}>

                        <div onClick={() => mobileMenuHandler(false)} className='menu-botton-wrap' style={{ float: 'right' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="burger-menu-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <nav className='mobile-menu-items '>
                            <div className="logo" ref={logoRef} style={{marginBottom: '20px'}}>
                                <Link to='/'>Kinjus</Link>
                            </div>
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

                            <div className='fav-link' ref={favRef}>
                                <Link to='/favourites'>Favourites</Link>
                            </div>
                        </nav>


                    </div>



                </div>
            </div>



            <div className="nav-wrap">
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
            </div>
        </>
    );
};

export default Navbar;