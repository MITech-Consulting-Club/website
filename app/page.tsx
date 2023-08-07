'use client';

import { BackgroundGraph } from '@/app/_components/background';
import styles from './page.module.scss';
import {
  TbBriefcase,
  TbChartHistogram,
  TbCloudCog,
  TbDeviceMobileCog,
} from 'react-icons/tb';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <BackgroundGraph isAnimated={true} />
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>MITech Consulting Club</h1>
        <p className={styles.headerSubtitle}>
          MITech Consulting Club is MIT's newest consulting club that offers
          innovative digital solutions & technical strategy to businesses
          looking to take themselves to the next level. Our students provide
          comprehensive advice and guidance to help businesses succeed in
          today's competitive market.
        </p>
        <a className={styles.headerLink} href="#about">
          Learn More
        </a>
      </header>
      <section className={styles.services} id="services">
        <h4 className={styles.servicesSubtitle}>Our Services</h4>
        <h2 className={styles.servicesTitle}>
          Technical and Strategy Consulting
        </h2>
        <div className={styles.servicesGallery}>
          <div className={styles.servicesGalleryItem}>
            <TbCloudCog className={styles.servicesGalleryItemIcon} />
            <h5 className={styles.servicesGalleryItemTitle}>
              Software Engineering
            </h5>
            <p className={styles.servicesGalleryItemDescription}>
              Our team specializes in software development and can provide
              valuable expertise and support to enhance your software projects.
              We offer comprehensive guidance throughout the development
              lifecycle, from initial planning and design to implementation and
              deployment.
            </p>
          </div>
          <div className={styles.servicesGalleryItem}>
            <TbDeviceMobileCog className={styles.servicesGalleryItemIcon} />
            <h5 className={styles.servicesGalleryItemTitle}>
              Web & Mobile Development
            </h5>
            <p className={styles.servicesGalleryItemDescription}>
              We are equipped to offer valuable assistance in web and mobile
              development. Whether you are looking to create a dynamic website
              or develop a mobile application, our experts can provide
              comprehensive support throughout the entire process.
            </p>
          </div>
          <div className={styles.servicesGalleryItem}>
            <TbChartHistogram className={styles.servicesGalleryItemIcon} />
            <h5 className={styles.servicesGalleryItemTitle}>Data Analysis</h5>
            <p className={styles.servicesGalleryItemDescription}>
              Our consulting team possesses proficiency in data analysis and is
              well-equipped to assist you in leveraging the full potential of
              your data. With our expertise in diverse data types and advanced
              analytical techniques, we can help unveil valuable insights and
              inform data-driven decision-making.
            </p>
          </div>
          <div className={styles.servicesGalleryItem}>
            <TbBriefcase className={styles.servicesGalleryItemIcon} />
            <h5 className={styles.servicesGalleryItemTitle}>
              Business Development
            </h5>
            <p className={styles.servicesGalleryItemDescription}>
              We prioritize business development and helping organizations
              achieve sustainable growth and success through guidance, business
              modeling, research, and analysis.
            </p>
          </div>
        </div>
        <Link href="/services" className={styles.servicesLink}>
          Learn More
        </Link>
      </section>
      <section id="about"></section>
      <section id="team"></section>
      <section id="alumni"></section>
      <section id="sponsors">
        <div className={styles.sponsorsInterestContainer}>
          <div className={styles.leftTextContainer}>
            <h1 className={styles.sponsorsInterestHeading}>
              Interested in Sponsoring MITech?
            </h1>
            <p className={styles.sponsorsInterestHeadingDescription}>
              More than just a tech consulting club.
            </p>
          </div>

          <div className={styles.rightTextContainer}>
            <h5 className={styles.sponsorsInterestDescription1}>
              We are currently looking for corporate sponsors.
            </h5>
            <p className={styles.sponsorsInterestDescription2}>
              Please reach out at mitech-corporate@mit.edu if you would like to
              learn more about our sponsorship packages & offerings; we would
              love to hear from you!
            </p>
          </div>
        </div>
      </section>
      <section id="contact"></section>
      <section id="community"></section>
    </>
  );
}
