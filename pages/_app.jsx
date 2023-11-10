import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';



function MyApp({ Component, pageProps }) {


  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
