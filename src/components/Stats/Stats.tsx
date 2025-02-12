import Image from 'next/image';
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="number-area" id="number-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5">
            <div className="number-img">
              <Image
                width={368}
                height={462}
                src="/images/about2.png.webp"
                alt="Motivational Figure"
                priority
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="number-content">
              <h4>Be the best version of you!</h4>
              <p>
                Be it a cleaner, a singer, or an esteemed academic—be the best. 
                It might not seem like much to those looking down on you, 
                but it will certainly elevate you above their opinions.
              </p>
              <p>
                When you are content with who you are, 
                you become an asset to the world and not a liability to God.
              </p>
              <div className="number-wrapper">
                <div className="single-number">
                  <h5><span className="counter">Kurwyn Adams</span></h5>
                </div>
                <div className="single-number">
                  <h5><span className="counter">10</span>K+</h5>
                  <p>Reviews</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">9</span> / 
                    <span className="counter">10</span>
                  </h5>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
