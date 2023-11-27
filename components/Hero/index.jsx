import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import { useEffect } from 'react';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  
  useEffect(() => {
    const removeLogo = () => {
      var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
      shadowRoot.querySelector('#logo')?.remove(); 
    };
  
    const observerConfig = { childList: true, subtree: true };
  
    const mutationCallback = (mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          if (document.querySelector('spline-viewer')) {
            removeLogo();  
            observer.disconnect();
          }
        }
      });
    };
  
    // Create a MutationObserver with the callback and configuration
    const observer = new MutationObserver(mutationCallback);
  
    // Start observing the document
    observer.observe(document.documentElement, observerConfig);
  
    // Cleanup function
    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []); // Empty dependency array to run the effect only once
  
  
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 "
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      
      <Div className="container">
        <Div className="row">
        <Div className="col-xl-6 order-sm-1 d-flex align-items-center center-mobile">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_subtitle">{subtitle}</Div>
          <Div className="cs-hero_info">
            <Div>
            <span className="btn custom-btn mt-3"> Take Tour  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z" fill="currentColor"></path>
                </svg> </span>
            </Div>
            </Div>
            </Div>
            <Div>
             
            </Div>
          </Div>
          <Div className="col-xl-6 order-sm-2 d-flex d-none justify-content-center align-items-right d-lg-block">
          <Div className="spline-viewer-wrapper ">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.465/build/spline-viewer.js"></script>
            <spline-viewer hint loading-anim url="https://prod.spline.design/jaPO-yUPwBfzXkEP/scene.splinecode"></spline-viewer>
            
        </Div>
        </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
