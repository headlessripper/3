import Head from 'next/head';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Stats from '@/components/Stats/Stats';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Blog/Blog';
import Courses from '@/components/Courses/Courses';


export default function BlogPage() {
  return <>
  <Head>
        <title>Bobaas Academy of Excellence</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bobaas.ico" />
      </Head>
      <Header />
      <HomeBanner />
      <About />
      <Courses />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
  </>
}
