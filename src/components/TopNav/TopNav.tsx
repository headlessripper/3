import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m0">
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href="">
                <i className="ti-mobile"></i>+27 82 490 2945
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i> 507 Poseidon St, Ennerdale Ext 1, Ennerdale, 1830
              </span>
            </div>
            <div className="float-right">
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href="https://www.facebook.com/bobaas.aoe">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default TopNav