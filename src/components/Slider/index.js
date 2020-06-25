import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Dot ,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./index.css";

import CarrouselImage1 from  '../../images/carousel/carousel-1.jpg';
import CarrouselImage2 from  '../../images/carousel/carousel-2.jpg';
import CarrouselImage3 from  '../../images/carousel/carousel-3.jpg';
import CarrouselImage4 from  '../../images/carousel/carousel-4.jpg';
 
export default function Index(){
    return (
        <CarouselProvider
        className="carouselProvider"
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={4}
        dragEnabled={false}
        infinite={true}
        isPlaying={true}
        
        >
        <ButtonBack className="carouselButton carouselButtonBack">&lt;</ButtonBack>
        <ButtonNext className="carouselButton carouselButtonNext">&gt;</ButtonNext>
        <Slider className="carousel">
          <Slide className="slide" index={0}><img src={CarrouselImage1} className="carouselImage"/></Slide>
          <Slide className="slide" index={1}><img src={CarrouselImage2} className="carouselImage"/></Slide>
          <Slide className="slide" index={2}><img src={CarrouselImage3} className="carouselImage"/></Slide>
          <Slide className="slide" index={3}><img src={CarrouselImage4} className="carouselImage"/></Slide>
        </Slider>
        <DotGroup
           dotNumbers={false}
           disableActiveDots={true} 
           className="dotGroup"
        />
      </CarouselProvider>
    );

}