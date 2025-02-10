import Image from 'next/image'
import React from 'react'

type Props = {
  showHeading?: boolean;
}

const TimeTable = ({ showHeading = true }: Props) => {
  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        {showHeading ? (
          <div className="area-heading">
            {/* Add heading here if needed */}
          </div>
        ) : null}
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
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: '#44c21d', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >MONDAY</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Mathematics Grade 11</li> <li>Physical Science Grade 10</li> <li>Accounting Grade 10</li></ol></a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: '#155900', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >TUESDAY</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Physical Science Grade 10</li> <li>Accounting Grade 10</li></ol></a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: '#155900', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >WEDNESDAY</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Physical Science Grade 11
                      </li> <li>Mathematics Grade 10</li> <li>Mathematics Grade 12</li></ol></a>
                    </h4>
                  </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: '#44c21d', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >THURSDAYS</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Mathematics Grade 10</li> <li>Mathematics Grade 11</li> <li>Physical Science Grade 12</li></ol></a>
                    </h4>
                  </div>
                </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: '#44c21d', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >SATURDAYS</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Physical Science Grade 10</li> <li>Accounting Grade 10</li></ol></a>
                    </h4>
                  </div>
                </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <div className="portfolio-card">
                <div className="img-fluid w-100"
                        style={{
                            backgroundColor: ' #155900', // Set your desired color
                            width: '555px',
                            height: '391px', // Maintain square aspect ratio
                            display: 'flex',
                            justifyContent: 'center',  // Horizontally center the text
                            alignItems: 'center',      // Vertically center the text
                            fontSize: '24px',          // Adjust font size as needed
                            color: 'white',            // Set the text color (optional)
                        }}
                        >SUNDAY</div>
                  <div className="short_info">
                    <p>CLASS SCHEDULE</p>
                    <h4>
                      <a href="portfolio-details.html"><ol><li>Mathematics Grade 12</li> <li>Physical Science Grade 12</li> <li>Accounting Grade 12</li></ol></a>
                    </h4>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeTable
