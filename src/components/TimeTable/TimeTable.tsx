import React from 'react';

type Props = {
  showHeading?: boolean;
};

const TimeTable = ({ showHeading = true }: Props) => {
  const timetableData = [
    { day: 'MONDAY', className: 'monday', classes: ['Mathematics Grade 11', 'Physical Science Grade 10', 'Accounting Grade 10'] },
    { day: 'TUESDAY', className: 'tuesday', classes: ['Physical Science Grade 10', 'Accounting Grade 10'] },
    { day: 'WEDNESDAY', className: 'wednesday', classes: ['Physical Science Grade 11', 'Mathematics Grade 10', 'Mathematics Grade 12'] },
    { day: 'THURSDAY', className: 'thursday', classes: ['Mathematics Grade 10', 'Mathematics Grade 11', 'Physical Science Grade 12'] },
    { day: 'SATURDAY', className: 'saturday', classes: ['Physical Science Grade 10', 'Accounting Grade 10'] },
    { day: 'SUNDAY', className: 'sunday', classes: ['Mathematics Grade 12', 'Physical Science Grade 12', 'Accounting Grade 12'] },
  ];

  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        {showHeading && (
          <div className="area-heading">
            {/* Add heading here if needed */}
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
            {timetableData.map((timetable, index) => (
              <div className="col-lg-6 col-md-6 all" key={index}>
                <div className="single_portfolio">
                  <div className="portfolio-card">
                    <div className={`img-fluid w-100 ${timetable.className}`}>
                      {timetable.day}
                    </div>
                    <div className="short_info">
                      <p>CLASS SCHEDULE</p>
                      <h4>
                        <a href="portfolio-details.html">
                          <ol>
                            {timetable.classes.map((classItem, idx) => (
                              <li key={idx}>{classItem}</li>
                            ))}
                          </ol>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeTable;
