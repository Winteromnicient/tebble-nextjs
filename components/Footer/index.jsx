import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'Web Development',
      url:'/category/web'
    },
    {
      title: 'Web Design',
      url:'/category/Web Design'
    },
    {
      title: 'Apps',
      url:'/category/Mobile App'
    },
    {
      title: 'CRO Blogs',
      url:'/category/UIUX'
    }    
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.svg"
                  logoAlt="Logo"
                  text=" Elevating Businesses, Fueling Progress.. Driving Corporate Growth Forward with technology "
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe to the exclusive newsletters on CRO & stay updated on dopest tech!"
                  placeholder="Enter Your Email"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Tebble.in</Div>
            
          </Div>
          <Div className="cs-bottom_footer_center">
            <Div className="custom-footer-text">Built using NextJs & Sveltekit</Div>
            
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
