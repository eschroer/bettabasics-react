import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      src: 'images/empty-aquarium.jpg',
      altText: 'Step One',
      caption: 'Assemble supplies and place the tank on a stable surface away from direct sunlight.',
      className: 'empty-aquarium mx-auto d-block'
    },
    {
      src: 'images/aquarium.jpg',
      altText: 'Step Two',
      caption: 'Fill and decorate the tank and wait for the tank to cycle.',
      className: 'aquarium mx-auto d-block'
    },
    {
      src: 'images/king-betta.jpg',
      altText: 'Step Three',
      caption: 'Once the tank is cycled, acclimate your betta fish to the tank slowly. Make sure to perform water changes weekly.',
      className: 'king-betta mx-auto d-block'
    }
  ];

function CarouselComponent () {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className={item.className} />
        <CarouselCaption className='carousel-caption' captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
      
    );
  });

  return (
    <>
    <h2 className="card-header text-center text-white">Setting Up Your First Aquarium</h2>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </>
  );
}

export default CarouselComponent
