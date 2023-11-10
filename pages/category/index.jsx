import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Portfolio from '../../components/Portfolio';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import TeamSlider from '../../components/Slider/TeamSlider';

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_4.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_7.jpeg',
      category: 'mobile_apps',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_8.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_9.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_10.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_4.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.jpeg',
      category: 'web_design',
    },
  ];
  const categoryMenu = [
    {
      title: 'Web Design',
      category: 'web_design',
    },
    {
      title: 'UI/UX Design',
      category: 'ui_ux_design',
    },
    {
      title: 'Mobile Apps',
      category: 'mobile_apps',
    },
    {
      title: 'Logo Design',
      category: 'logo_design',
    },
  ];
  return (
    <>
      <Head>
        <title>Home - Category</title>
        <meta name="Tebble | Category" content="Our Services Category Section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>       
      
         <Spacing    lg="145" md="80" />
        <Div className="container" id="portfolio" >
          <SectionHeading
            title="Our Recent Work"
            subtitle=""
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
        {/* <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
            <Div className="cs-filter_menu cs-style1">
              <ul className="cs-mp0 cs-center">
                <li className={active === 'all' ? 'active' : ''}>
                  <span onClick={() => setActive('all')}>All</span>
                </li>
                {categoryMenu.map((item, index) => (
                  <li
                    className={active === item.category ? 'active' : ''}
                    key={index}
                  >
                    <span onClick={() => setActive(item.category)}>
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Div>
          </Div>
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioData.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${
                  active === 'all'
                    ? ''
                    : !(active === item.category)
                    ? 'd-none'
                    : ''
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div>
        </Div>
        <Spacing lg="145" md="80" /> */}
        <Cta
          title="siddhant@tebble.in"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
