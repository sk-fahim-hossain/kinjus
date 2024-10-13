import React, { useRef } from 'react';
import { useGsapNotFoundLeftText, useGsapNotFoundRightText } from '../hooks/gsap';

const NotFoundPage = () => {
    const notFoundLeftTextRef = useRef(null)
    const notFoundRightTextRef = useRef(null)
    const notFoundImageRef =  useRef(null)

    useGsapNotFoundLeftText(notFoundLeftTextRef)
    useGsapNotFoundRightText(notFoundRightTextRef)
    return (
        <section className='not-found wrapper'>
            <div className='not-found-wrapper'>
                <div className='not-found-info-l'>
                    <h1 className='not-found-text' ref={notFoundLeftTextRef}>The Requested Page</h1>
                    <img className='not-found-img' src="https://images.pexels.com/photos/16135564/pexels-photo-16135564/free-photo-of-photo-of-two-women-and-a-man-with-vintage-cameras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div  className='not-found-info-r'>
                    <img className='not-found-img' src="https://images.pexels.com/photos/18078709/pexels-photo-18078709/free-photo-of-man-sitting-with-vintage-telephone-and-near-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h1 className='not-found-text' ref={notFoundRightTextRef}>Is not founded</h1>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;