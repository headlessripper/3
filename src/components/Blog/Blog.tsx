import Image from 'next/image';
import React from 'react';

const Blog: React.FC = () => {
  return (
    <section className="blog-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Our Recent News</h3>
          <p>Together female let signs for fish, fowl may first.</p>
        </div>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="col-lg-4 col-md-4">
              <div className="single-blog">
                <div className="thumb">
                  <div className="img-wrapper">
                    <Image
                      width={360}
                      height={285}
                      src={`/images/${num}.jpg.webp`}
                      alt={`Blog post ${num}`}
                      priority
                    />
                  </div>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">
                      <i className="ti-calendar"></i> Feb 14, 2019
                    </a>
                    <a href="#">
                      <i className="ti-folder"></i> company
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Yielding called winged years they are likeness hath
                      morning
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;