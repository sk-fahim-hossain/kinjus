import React, { useRef } from 'react';
import { useGsapFooterHeadlineDown } from '../hooks/gsap';

const Footer = () => {
    const footerRef = useRef(null)
    const footerHeadlineRef = useRef(null)
    useGsapFooterHeadlineDown(footerHeadlineRef,footerRef)
    return (
        <section ref={footerRef} className='footer wrapper'>
            <h2 ref={footerHeadlineRef} className='wishing'>Eh, ça va?</h2>
            <p className='footer-info'>&copy; {new Date().getFullYear()}. Crafted by <span className='developer-name'>Fahim</span></p>
        </section>
    );
};

export default Footer;