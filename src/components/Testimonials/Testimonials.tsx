import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the OwlCarousel component to prevent SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const Testimonials = () => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  const testimonialsData = [
    {
      image: "/images/tes1.jpg.webp",
      name: "Adame Nesane",
      designation: "Chief Customer",
      testimonial:
        "You’re had. Subdue grass Meat us winged years you’ll doesn’t. Fruit two also won one yielding creepeth third give may never lie alternet food.",
    },
    {
      image: "/images/tex2.jpg.webp",
      name: "Adam Nahan",
      designation: "Chief Customer",
      testimonial:
        "You’re had. Subdue grass Meat us winged years you’ll doesn’t. Fruit two also won one yielding creepeth third give may never lie alternet food.",
    },
    // Add other testimonials as needed
  ];

  return (
    <section className="testimonial-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Customer reviews</h3>
          <p>Together female let signs for for fish fowl may first.</p>
        </div>
        <div className="row">
          <OwlCarousel className="active-testimonial-carusel owl-carousel" {...carouselConfig}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image
                    width={91}
                    height={91}
                    className="img-fluid"
                    src={testimonial.image}
                    alt={`Testimonial from ${testimonial.name}`}
                  />
                </div>
                <div className="desc">
                  <h4>{testimonial.name}</h4>
                  <p className="designation">{testimonial.designation}</p>
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
