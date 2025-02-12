import React, { FC } from "react";
import Link from "next/link"; // Importing the Link component from next/link

const Footer: FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          {/* Useful Links Section */}
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h6>Useful Links</h6>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Company News</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Timetable</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Our Courses</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">Shop</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Business Hours</h6>
              <ul className="business-hour">
                <li>
                  Monday - Friday: <span>9:00 am - 6:00 pm</span>
                </li>
                <li>
                  Saturday: <span>9:00 am - 4:00 pm</span>
                </li>
                <li>
                  Sunday: <span>Closed</span>
                </li>
              </ul>
              <p>We work all the holidays!</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-12">
            <div className="single-footer-widget newsletter">
              <h6>Email Newsletter</h6>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <div className="form-group row no-gutters">
                    <div className="col-lg-8 col-md-8 col-7">
                      <input
                        name="EMAIL"
                        placeholder="Your Email Address"
                        required
                        type="email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-5">
                      <button type="submit" className="nw-btn main_btn circle">
                        Subscribe <span className="lnr lnr-arrow-right"></span>
                      </button>
                    </div>
                  </div>
                  <div className="info"></div>
                </form>
              </div>
              <p>
                Sign up for new Recover Construction Company content, updates,
                surveys &amp; offers.
              </p>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="col-lg-12 footer-text">
              Copyright &copy; 2023 All rights reserved | This template is made
              with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
              <Link href="/">
                
                  Colorlib
                
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
