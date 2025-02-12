import Image from 'next/image';
import React from 'react';

type Props = {
  showHeading?: boolean;
};

const Portfolio = ({ showHeading = true }: Props) => {
  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        
        {showHeading && (
          <div className="area-heading">
            <h3 className="line">Our Portfolio</h3>
            <p>Explore our diverse and customized services that help you excel!</p>
          </div>
        )}

        <div className="filters portfolio-filter">
          <ul>
            <li className="active" data-filter="*">
              all
            </li>
          </ul>
        </div>

        <div className="filters-content">
          <div className="row portfolio-grid">
            <div className="col-lg-6 col-md-6 all following">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/images/testprep.avif"
                  alt="Test preparation service"
                />
                <div className="short_info">
                  <p>TEST PREP</p>
                  <h4>
                    <a href="portfolio-details.html">Personalized Attention</a>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/images/grouplesson.avif"
                  alt="Group lessons service"
                />
                <div className="short_info">
                  <p>GROUP LESSONS</p>
                  <h4>
                    <a href="portfolio-details.html">Customized Lessons to Fit</a>
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
