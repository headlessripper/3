import Image from 'next/image'
import React from 'react'
import Courses from '../Courses/Courses'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">LESSONS AND SPECIALTIES</h3>
            <h4>Results That Last</h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="" />
                  
                </div>
                <div className="service-content">
                  <h5>TEST PREP</h5>
                  <p>
                  Experience personalized attention that 
                  helps you excel, ensuring a deeper 
                  understanding and stronger performance in all your exams.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>GROUP LESSONS</h5>
                  <p>
                  Engage in customized lessons designed to fit your learning style, 
                  ensuring you gain a solid grasp of the material and excel with your peers.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>One-on-One Coaching</h5>
                  <p>
                  Benefit from individualized coaching sessions that cater to your specific needs
                  , helping you achieve personal growth and reach your full potential.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={82} height={82} src="/images/i4.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Skill Development</h5>
                  <p>
                  Enhance your abilities through targeted skill-building sessions,
                  designed to strengthen your weaknesses and accelerate your progress toward mastery.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services