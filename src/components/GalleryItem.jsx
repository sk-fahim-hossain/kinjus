import React, { useRef } from 'react';
import {  useGsapCategory,  useGsapGalleryImage, useGsapGalleryTitle } from '../hooks/gsap';

const GalleryItem = ({ item }) => {
    const galleryTitleRef = useRef(null)
    const galleryCategoryRef = useRef(null)
    const galleryImageRef = useRef(null)

    useGsapGalleryImage(galleryImageRef)
    useGsapGalleryTitle(galleryTitleRef, galleryImageRef)
    useGsapCategory(galleryCategoryRef, galleryImageRef)

    return (
        <div className='gallery-item' >
            <h2 ref={galleryTitleRef} className='gallery-item-title'>{item.title}</h2>
            <p ref={galleryCategoryRef} className='gallery-item-category'>{item.category}</p>
            <div ref={galleryImageRef} className='gallery-item-img'>
                <img src={item.src} alt={item.title} srcset="" />
            </div>
        </div>
    );
};

export default GalleryItem;