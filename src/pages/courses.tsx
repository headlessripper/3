import Head from 'next/head';
import Header from '@/components/Header/Header';
import PageHeader from '@/components/PageHeader/PageHeader';
import Courses from '@/components/Courses/Courses';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Bobaas Courses</title>
        <meta
          name="description"
          content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Our Courses" navTitle="Courses" />
      <Courses />
    </>
  );
}
