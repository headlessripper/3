import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image width={555} height={485} src="/images/adams.jpg.webp" alt="Kurwyn Adams" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>KURWYN ADAMS</h4>
              <br />
              <h3>Founder of the Academy</h3>
              <p>
              &quot;To Teach is To Touch Someone&apos;s Life Forever!&quot; is my underlying philosophy. I am responsible for Grade 12 Mathematics, Physical Science & Accounting. Moreover, I am also responsible for Grade 11 Mathematics and Accounting.  
                From day one, my students notice the improvement in their abilities and overall comprehension. Each student has a unique learning style, and it’s my duty to find out what that is and adapt my lessons accordingly.
              </p>
              <Link className="main_btn" href="/info">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
