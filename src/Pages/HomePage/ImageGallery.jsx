import React from 'react';
import 'animate.css';
import './CustomStyle.css';
import photo1 from '../../assets/home/photo-gallery/gallery-image-1.jpg';
import photo2 from '../../assets/home/photo-gallery/gallery-image-2.jpg';
import photo3 from '../../assets/home/photo-gallery/gallery-image-3.jpg';
import photo4 from '../../assets/home/photo-gallery/gallery-image-4.jpg';
import photo5 from '../../assets/home/photo-gallery/gallery-image-5.jpg';
import photo6 from '../../assets/home/photo-gallery/gallery-image-6.jpg';
import photo7 from '../../assets/home/photo-gallery/gallery-image-7.jpg';
import photo8 from '../../assets/home/photo-gallery/gallery-image-8.jpg';
import photo9 from '../../assets/home/photo-gallery/gallery-image-9.jpg';
import photo10 from '../../assets/home/photo-gallery/gallery-image-10.jpg';
import photo11 from '../../assets/home/photo-gallery/gallery-image-12.jpg';
import ScrollAnimation from 'react-animate-on-scroll';


const ImageGallery = () => {
    return (
        <>
            <ScrollAnimation animateIn='fadeInDown' initiallyVisible={true}>
                <h1 className='text-xl md:text-4xl lg:text-6xl font-semibold text-center my-5'>Some Precious Moment&apos;s of Our Happy Children&apos;s!</h1>
            </ScrollAnimation>
            <div className='px-3 lg:px-10 gallery-image-container'>
                <img className='image1' src={photo1} alt="" />
                <img className='image2' src={photo2} alt="" />
                <img className='image3' src={photo3} alt="" />
                <img className='image4' src={photo4} alt="" />
                <img className='image5' src={photo5} alt="" />
                <img className='image6' src={photo6} alt="" />
                <img className='image7' src={photo7} alt="" />
                <img className='image8' src={photo8} alt="" />
                <img className='image9' src={photo9} alt="" />
                <img className='image10' src={photo10} alt="" />
                <img className='image11' src={photo11} alt="" />
            </div>
        </>
    );
};

export default ImageGallery;