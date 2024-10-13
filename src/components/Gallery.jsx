import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    const data = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/4836371/pexels-photo-4836371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Arcade playtime for 90's kids",
            category: "Arcade Games"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/18078709/pexels-photo-18078709/free-photo-of-man-sitting-with-vintage-telephone-and-near-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "No signal - no transmission",
            category: "TV"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/16135564/pexels-photo-16135564/free-photo-of-photo-of-two-women-and-a-man-with-vintage-cameras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Retro Closures",
            category: "Boombox"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/12204296/pexels-photo-12204296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Vinyl Loveless Happiness",
            category: "Vinyl Record"
        },

    ]
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