import React, { useRef } from 'react';
import { useGsapFeatureLeftShutterUnveil, useGsapFeatureRightShutterUnveil } from '../hooks/gsap';

const Featured = () => {
    const featuredRef = useRef(null);
    const shutterLeftRef = useRef(null)
    const shutterRightRef = useRef(null)

    useGsapFeatureLeftShutterUnveil(shutterLeftRef, featuredRef)
    useGsapFeatureRightShutterUnveil(shutterRightRef, featuredRef)
    return (
        <section className='featured wrapper' ref={featuredRef}>
            <h2 className='section-title'>featured</h2>
            <div className="features">
                <div className="featured-l">
                    <span className='feature-text'>90's Telephone</span>
                    <img src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90's Telephone" srcset="" />
                    <span className='feature-shutter-l' ref={shutterLeftRef}></span>
                </div>
                <div className="featured-r">
                    <span className='feature-text'>90's Cassette Player</span>
                    <img src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90's Cassette Player" srcset="" />
                    <span className='feature-shutter-r' ref={shutterRightRef}></span>
                </div>
            </div>
        </section>
    );
};

export default Featured;