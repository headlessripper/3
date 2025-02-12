import React from "react";
import Link from "next/link";

type Props = {
  title?: string;
  navTitle?: string;
};

const PageHeader = ({ title = "About Us", navTitle = "About Us" }: Props) => {
  return (
    <section className="hero-banner hero-banner-sm">
      <div className="container text-center">
        <h1>{title}</h1> {/* Changed h2 to h1 for the main page title */}
        <nav aria-label="breadcrumb" className="banner-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" passHref>
              <Link href="/">Home</Link>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {navTitle}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
