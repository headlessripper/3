import React from "react";
import { Parallax } from "react-parallax";

const HomeBanner: React.FC = () => {
  return (
    <section className="home_banner_area">
      <Parallax
        blur={0}
        bgImage="/images/back.jpg"
        bgImageAlt="home banner"
        strength={300}
      >
        <div className="container-fluid banner_inner d-flex">
          <div className="container d-flex align-items-center">
            <div className="banner_content text-center">
              <h1>BOBAAS ACADEMY OF EXCELLENCE</h1>
              <h6>Paving Your Way to Education. By Making Every Class Count</h6>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HomeBanner;
