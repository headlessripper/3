import Link from "next/link";
import React from "react";

const TopNav: React.FC = () => {
  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="float-left">
          <a className="dn_btn" href="tel:+27824902945">
            <i className="ti-mobile"></i> +27 82 490 2945
          </a>
          <span className="dn_btn">
            <i className="ti-location-pin"></i> 507 Poseidon St, Ennerdale Ext 1, Ennerdale, 1830
          </span>
        </div>
        <div className="float-right">
          <span className="follow_us">Follow us:</span>
          <ul className="list header_social">
            <li>
              <Link href="https://www.facebook.com/bobaas.aoe" legacyBehavior>
                
                  <i className="ti-facebook"></i>
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
