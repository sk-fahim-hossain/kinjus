import React, { useRef } from 'react';
import { useGsapPhotoDropping, useGsapPhotoLevitate, useGsapUnveil } from '../hooks/gsap';

const Hero = () => {
    const heroRef = useRef(null)
    const shutter1 = useRef(null)
    const shutter2 = useRef(null)

    useGsapUnveil(shutter1, 0, heroRef)
    useGsapUnveil(shutter2, 0.2, heroRef)

    const photo1Ref = useRef(null)
    const photo2Ref = useRef(null)
    const photo3Ref = useRef(null)
    const photo4Ref = useRef(null)
    const photo5Ref = useRef(null)

    const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref]
    useGsapPhotoDropping(photosArr)
    useGsapPhotoLevitate(photosArr, heroRef)
    
 
    return (
        <section className='hero wrapper' ref={heroRef}>
            <h1 className='ehternal'>
                Infinite <span ref={shutter1}></span>
            </h1>
            <h1  className='canvas'>
                Canvas <span ref={shutter2}></span>
            </h1>

            <div className="photos">
                <div ref={photo1Ref} className="photo one" style={{backgroundImage:'url("https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}></div>
                <div ref={photo2Ref} className="photo two" style={{backgroundImage:'url("https://images.pexels.com/photos/17302471/pexels-photo-17302471/free-photo-of-motivational-quotes-painted-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load")'}}></div>
                <div ref={photo3Ref} className="photo three" style={{backgroundImage:'url("https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}></div>
                <div ref={photo4Ref} className="photo four" style={{backgroundImage:'url("https://images.pexels.com/photos/6029524/pexels-photo-6029524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}></div>
                <div ref={photo5Ref} className="photo five" style={{backgroundImage:'url("https://images.pexels.com/photos/28962891/pexels-photo-28962891/free-photo-of-vibrant-nightlife-at-iconic-colony-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}></div>
            </div>
        </section>
    );
};

export default Hero;