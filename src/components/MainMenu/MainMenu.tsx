import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = object;

const MainMenu: FC<Props> = () => {
  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/" passHref>
            <Image src="/images/bobaas.jpeg" alt="Bobaas Logo" width={165} height={120} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link href="/" passHref>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" passHref>
                  MEET OUR TUTORS
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/courses" passHref>
                  COURSES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/timetable" passHref>
                  TIMETABLE
                </Link>
              </li>

              {/* Blog Dropdown */}
              <li className="nav-item">
                <Link href="/blog" passHref>
                  BLOG
                </Link>
                
              </li>

              <li className="nav-item">
                <Link href="/contact" passHref>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Buttons */}
          <div className="right-button">
            <ul>
              <li className="shop-icon">
                <Link href="/recordings" passHref>
                  <i className="ti-shopping-cart-full" />
                  <span>0</span>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <i className="ti-search" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
