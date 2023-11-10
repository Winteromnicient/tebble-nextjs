import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import Sidebar from '../../components/Sidebar.jsx';
import firebaseApp from '../../firebase/firebaseConfig';
import firebaseConfig from '../../firebase/firebaseConfig';
import { getFirestore, collection, query, where, getDocs  } from 'firebase/firestore';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';


export default function PortfolioDetails() {
  const router = useRouter();
  const portfolioId = router.query.portfolioId;
  const [portfolioData, setPortfolioData] = useState(null);
  const db = getFirestore(); 

  useEffect(() => {
    if (portfolioId) {
      // portfolioId is defined, proceed with Firestore query
      const portfolioCollection = collection(db, 'PortfolioDetails');
      const q = query(portfolioCollection, where('portfolio_slug', '==', portfolioId));

      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // Store the portfolio data in the state
            setPortfolioData(doc.data());
            console.log(doc.data)
          });
        })
        .catch((error) => {
          console.error('Error getting documents: ', error);
        });
    }
  }, [portfolioId]); 
  const bgSrc = portfolioData ? portfolioData.imageURL : '/images/default_bg.jpg';
  const title = portfolioData ? portfolioData.portfolio_title : "Demo Title";
  const subtitle = portfolioData ? portfolioData.portfolio_subtitle : "Demo Subtitle";
  const subdetails = portfolioData ? portfolioData.portfolio_subdetails : "Demo Subdetails";
  const subdetails2 = portfolioData ? portfolioData.portfolio_subdetails2 : "Demo Subdetails2";
  const category = portfolioData ? portfolioData.portfolio_category : "Demo Category";
  const location = portfolioData ? portfolioData.portfolio_location : "Demo location";
  const software = portfolioData ? portfolioData.portfolio_software : "Demo software";
  const date = portfolioData ? portfolioData.portfolio_date : "Demo date";
  const client = portfolioData ? portfolioData.portfolio_client : "Demo client";
  const description = portfolioData ? portfolioData.portfolio_description : "Demo description";
  const detailimage1 = portfolioData ? portfolioData.portfolio_detailimage1 : "Demo detailimage1";
  const detailimage2 = portfolioData ? portfolioData.portfolio_detailimage2 : "Demo detailimage1";
  const testimonial = portfolioData ? portfolioData.portfolio_testimonial : "Demo testimonial";
  const clientname = portfolioData ? portfolioData.portfolio_clientname : "Demo clientname";
  
 // Function to render HTML content safely
 const createMarkup = (content) => {
  return { __html: content };
};  
  
  return (
    <>
      <Head>
        <title>Portfolio - {portfolioId}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Portfolio Details"
          bgSrc={"/images/service_hero_bg.jpeg"}
          pageLinkText={portfolioId}
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <img
            src={bgSrc}
            alt="Details"
            className="cs-radius_15 w-100"
          />
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading title={title} subtitle="">
                <Spacing lg="40" md="20" />
                <p>
                {subdetails}
                </p>
                <Spacing lg="10" md="10" />
                <p>
                {subdetails2}
                </p>
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="60" md="40" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0">{category}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">{location}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Software:
                  </h3>
                  <p className="cs-m0">{software}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Dated:
                  </h3>
                  <p className="cs-m0">{date}</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Client:
                  </h3>
                  <p className="cs-m0">{client}</p>
                  <Spacing lg="30" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>        
        </Div>
          {/* Start portfolio Details */}
          <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8">
              {/* Start Details Post Content */}
              <Div className="cs-post cs-style2">
               
                <Div className="cs-post_info">
                  <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                    <span className="cs-posted_by">{date}</span>
                    <Link href="/portfolio" className="cs-post_avatar">
                      {software}
                    </Link>
                  </Div>
                  <h2 className="cs-post_title">
                    {subtitle}
                  </h2>
                  <p>
                  
                  </p>
                  <div dangerouslySetInnerHTML={createMarkup(description)}></div>
                  <p>
                    
                  </p>
                  <Div className="row">
                    <Div className="col-md-6">
                      <img
                        src={detailimage1}
                        alt="portfolio Details"
                        className="cs-radius_15 w-100"
                      />
                      <Div className="cs-height_45 cs-height_lg_45" />
                    </Div>
                    <Div className="col-md-6">
                      <img
                        src={detailimage2}
                        alt="portfolio Details"
                        className="cs-radius_15 w-100"
                      />
                      <Div className="cs-height_45 cs-height_lg_45" />
                    </Div>
                  </Div>
                  <h3></h3>
                  <p>
                   
                  </p>
                  <p>
                   
                  </p>
                  <blockquote className="cs-primary_font">
                    {testimonial}
                    <small>{clientname}</small>
                  </blockquote>
                </Div>
              </Div>
              {/* End Details Post Content */}

              {/* Start Comment Section */}
              <Spacing lg="30" md="30" />
              <h2 className="cs-font_50 cs-m0">Thanks for Reading</h2>
              <Spacing lg="5" md="5" />
              <p className="cs-m0">
                Revert me on my email for any queries *
              </p>
              <Spacing lg="40" md="30" />
             
              {/* End Comment Section */}
            </Div>
            <Div className="col-xl-3 col-lg-4 offset-xl-1">
              {/* Start Sidebar */}
              <Spacing lg="0" md="80" />
              <Sidebar />
              {/* End Sidebar */}
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button
                btnLink="/portfolio/portfolio-details"
                btnText="Prev Project"
                variant="cs-type1"
              />
            </Div>
            <Div>
              <Button
                btnLink="/portfolio/portfolio-details"
                btnText="Next Project"
              />
            </Div>
          </Div>
        <Spacing lg="150" md="80" />
        {/* Start portfolio Details */}
        <Spacing lg="145" md="80" />
        <Cta
          title="siddhant@tebble.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
