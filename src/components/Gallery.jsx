import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = () => {


    const data = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/7688762/pexels-photo-7688762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "90's Arcade Adventures",
            category: "Classic Games"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/8059508/pexels-photo-8059508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Static TV Memories",
            category: "Retro Television"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/22756481/pexels-photo-22756481/free-photo-of-portrait-of-woman-holding-retro-camera-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Vintage Camera Vibes",
            category: "Retro Photography"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/12204296/pexels-photo-12204296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Vinyl Vibes and Classics",
            category: "Vinyl Collection"
        },
    ];
    
    return (
        <section className='gallery'>
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-wrapper">
                {
                    data.map((item) => <GalleryItem key={item.key} item={item} />)
                }
            </div>

        </section>
    );
};

export default Gallery;