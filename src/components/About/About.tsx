import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/adams.jpg.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                  KURWYN ADAMS</h4><br />
                  
                  <br />
                  <h3>Founder of the Academy</h3>
                
                <p>
                To Teach is To Touch Someone's Life Forever is my underlying philosophy.{`'`}
                I am responsible for Grade 12 Mathematics, Physical Science & Accounting. Moreover, 
                 am also responsible for Grade 11 Mathematics and Accounting. {" "}
                 From day one, my students notice the improvement in their abilities and
                  overall comprehension. Each student has a unique learning style, and it’s\
                   my duty to find out what that is and adapt my lessons accordingly.
                  <br />
                  likeness spirit winged two all fourth they{`'`}re gathered
                  <br /> seasons very may heaven saying. Fly image th
                </p>
                <a className="main_btn" href="#">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About