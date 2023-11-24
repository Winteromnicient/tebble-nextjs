import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Linkedin',
      links: '/',
    },
    {
      name: 'Instagram',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Development Projects',
      factNumber: '150',
    },
    {
      title: 'Websites Done',
      factNumber: '175',
    },
    {
      title: 'Years of Experience',
      factNumber: '10',
    },
    {
      title: 'Digital products',
      factNumber: '45',
    },
  ];

  

  return (
    <>
      <Head>
        <title>Tebble - Your Partner in Web Development and Design</title>
        <meta name="description" content="Creating Memorable Digital Experiences , Your Partner in Web Development and Design" />
        <meta name="keywords" content="web development, web design, Tebble, development agency, design services" />
        <meta name="author" content="Tebble" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Memorable<br /> Digital Experiences"
          subtitle="Elevating Businesses, Fueling Progress.. Driving Corporate Growth Forward with technology"
          btnText="Get a Quote"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Connect Me"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/bghero.webp"
          
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Journey Highlights"
            subtitle="Embarking on a decade-long journey through the ever-evolving realms of technology"
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}
      

          


        {/* Start Team Section */}
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
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        {/* <TestimonialSlider /> */}
        {/* End Testimonial Section */}

         {/* Start Awards Section */}
         <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="The Tech"
                  subtitle=""
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Awards Section */}   

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent blogposts"
                  subtitle=""
                  btnText="All Blogs"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="where design meets code..." />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        {/* <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" /> */}
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Connect Us!"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
