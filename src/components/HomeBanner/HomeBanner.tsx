import React from "react";
import { Parallax } from "react-parallax";
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
      <Parallax
        blur={0}
        bgImage="/images/back.jpg"
        bgImageAlt="home banner"
        strength={300} 
        className="container-fluid banner_inner d-flex"
        contentClassName="container-fluid d-flex align-items-center"
      >
        <div className="container">
          <div className="banner_content text-center">
          
            <h3>
              BOBAAS ACADEMY OF EXCELLENCE
              </h3>
              <br />
              <h6>Paving Your Way to Education. By Making Every Class Count</h6>
            
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HomeBanner;
