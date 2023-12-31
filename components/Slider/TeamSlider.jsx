import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/web_dev2.gif',
      memberName: 'Web Dev',
      memberDesignation: 'Full/Mid Stack',
      memberLink: "/category/web" ,
      memberSocial: {
        react: '/',
        html: '/',
        code: '/',
        javas: '/',
       
        
        
      },
    },
    {
      memberImage: '/images/web_design.gif',
      memberName: 'Websites',
      memberDesignation: 'Svelte Nextjs',
      memberLink: "/category/Web Design",
      memberSocial: {
        bootstrap: '/',
        html: '/',
        wordpress: '/',
        code: '/',
       
        
      },
    },
    {
      memberImage: '/images/app_dev2.gif',
      memberName: 'Mobile Applications',
      memberDesignation: 'Native / Hybrid / PWA',
      memberLink: "/category/Mobile App",
      memberSocial: {
        android: '/',
        appstore: '/',
        mobile: '/',
        react: '/',
       
      },
    },
    {
      memberImage: '/images/ui_design.gif',
      memberName: 'UI / UX',
      memberDesignation: 'Figma / Sketch / XD ',
      memberLink: "/category/UIUX",
      memberSocial: {
        figma: '/',
        sketch: '/',
        uikit: '/',
       
        
      },
    },    
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow custom-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow custom-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
            memberLink={item.memberLink}
          />
        </Div>
      ))}
    </Slider>
  );
}
