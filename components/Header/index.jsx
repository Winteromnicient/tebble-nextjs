import React, { useEffect, useState } from 'react';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';
import Link from 'next/link';


export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        AT TEBBLE
                      </Link>                      
                    </li>
                    <li>
                      <Link href="about" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category"
                        onClick={() => setMobileToggle(false)}
                      >
                        PORTFOLIO
                      </Link>                     
                    </li>                   
                    
                    <li>
                      <Link href="/contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                     
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <span className="btn custom-btn d-lg-block" style={{ display: 'none' }}>For Entrepreneurs                  
                </span>
            </Div>
          </Div>
        </Div>
      </header>

     
    </>
  );
}
