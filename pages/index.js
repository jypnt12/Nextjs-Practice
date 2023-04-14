import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a web developer with 1 year of experience in JavaScript, HTML, CSS, React, as well as knowledge in Java and Python,
 I have a strong foundation in some of the most popular and in-demand programming languages used in web development. 
I am passionate about creating clean, efficient, and user-friendly websites and web applications that meet my clients' needs and exceed their expectations.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}