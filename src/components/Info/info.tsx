import React from "react";
import Image from "next/image";

const Info: React.FC = () => {
  return (
    <section className="info-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="info-img">
              <Image width={555} height={485} src="/images/adams.jpg.webp" alt="Information Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-content">
              <h4>Founder of the Academy</h4>
              <h3>Pastor Kurwyn Adams</h3>
              <p>
                I am the founder of the Academy, and my guiding philosophy is{" "}
                <span>&quot;To Teach is To Touch Someone&apos;s Life Forever.&quot;</span> 
                Currently, I serve as the Deputy Principal at Fred Norman Secondary School, 
                where my ambit of responsibilities includes overseeing curriculum delivery 
                integrated with E-Learning, especially in STEM subjects.
              </p>
              <p>
                In the academy, I oversee Grade 11-12 Mathematics, Physical Science, and Accounting.
                I firmly believe that from the very first day, my learners begin to see tangible 
                improvements in their skills and overall understanding. Each learner has a unique 
                learning style, and it&apos;s my responsibility to identify it and tailor my lessons 
                to support their growth and success.
              </p>
              <p>
                Additionally, I am the youth pastor at RocBreed Youth Ministries in Ennerdale. 
                With faith in God, I strive to be a vessel for positive change, helping young people 
                thrive in all aspects of their lives.
              </p>
              <p>I look forward to meeting you. 🙏🏻</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
