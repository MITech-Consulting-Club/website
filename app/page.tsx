'use client';

import { BackgroundGraph } from '@/app/_components/background';
import styles from './page.module.scss';
import {
  TbBriefcase,
  TbChartHistogram,
  TbCloudCog,
  TbDeviceMobileCog,
} from 'react-icons/tb';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
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
      <section id="about">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutLeftTextContainer}>
            <h6 className={styles.aboutSubHeading}>About</h6>
            <h4 className={styles.aboutHeading}>Our Mission</h4>
            <p className={styles.aboutDescription}>
              At MITech Consulting Club, we seek to empower students at MIT to
              become tech leaders and consultants by delivering practical
              projects and fostering a culture of continuous learning. Through
              mentorship, professional development, and a vibrant community, we
              create an environment where members thrive, making a meaningful
              impact in the ever-evolving world of technology consulting.
            </p>
            <a className={styles.ourServicesLink} href="#services">
              Learn More
            </a>
          </div>

          <div className={styles.aboutImageContainer}>
            <Image
              src="/home/homeAboutGraph.png"
              alt="graph"
              width={500}
              height={500}
              className={styles.aboutImage}
              unoptimized
            />
          </div>
        </div>
      </section>
      <section id="team">
        <div className={styles.teamContainer}>
          <h1 className={styles.teamHeading}>Team</h1>
          <h6 className={styles.teamSubHeading}>
            Dedication. Expertise. Passion.
          </h6>
          <p className={styles.teamDescription}>
            We are a diverse group of MIT undergraduate students who are
            passionate about technology. We represent a wide variety of
            interests, majors, and backgrounds with people involved in many
            different activities across campus.
          </p>
          <Link href="/about#meetTeam" className={styles.aboutLink}>
            Learn More
          </Link>
        </div>
      </section>
      <section id="alumni">
        <div className={styles.alumniContainer}>
          <div className={styles.alumniLeftTextContainer}>
            <h3 className={styles.alumniHeading}>Alumni</h3>
            <p className={styles.alumniDescription}>
              Our club is proud of the relationships that we establish with MIT
              alumni, which allows us to support the growth and development of
              our members. By working closely with alumni that are experts in
              the tech industry, we help our members gain valuable skills and
              connections.
            </p>
            <Link href="/alumni" className={styles.alumniLink}>
              Learn More
            </Link>
          </div>
          <div className={styles.alumniRightImageContainer}>
            <Image
              src="/alumni/advisorImages/sam.jpg"
              alt="alumni advisor headshot"
              width={500}
              height={500}
              className={styles.alumniAdvisorHeadshot}
            />
            <h5 className={styles.alumniAdvisorName}>Sam Kwei</h5>
            <h5 className={styles.alumniAdvisorTitle}>
              Staff Technical Program Manager at Google
            </h5>
            <p className={styles.alumniAdvisorRole}>
              Professional Development Advisor
            </p>
            <p className={styles.alumniAdvisorClass}>MIT Class of 2005</p>
          </div>
        </div>
      </section>
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
      <section id="contact">
        <div className={styles.contactContainer}>
          <div className={styles.contactLeftTextContainer}>
            <h6 className={styles.contactSubHeading}>Contact Us</h6>
            <h4 className={styles.contactHeading}>Get in Touch</h4>
            <p className={styles.contactDescription}>
              Want to learn more about us, what we do, and our services? Visit
              pages dedicated to your interests and fill out the forms below; we
              will get back to you as soon as we can to schedule a call to see
              how we can best work together!
            </p>

            <div className={styles.contactSocials}>
              <a
                href="https://www.linkedin.com/company/mitech-consulting-club/"
                target="_blank"
                className={styles.socialIcon}
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mitechconsulting/"
                target="_blank"
                style={{ fontSize: 25 }}
                className={styles.socialIcon}
              >
                <BsInstagram />
              </a>
              <a
                href="mailto:mitech-exec@mit.edu"
                target="_blank"
                className={styles.socialIcon}
              >
                <MdEmail />
              </a>
            </div>
            <div className={styles.contactForms}>
              <a
                href="https://forms.gle/SnicvC9TUVHBG2t6A"
                target="_blank"
                className={styles.contactForm}
              >
                Client/Project Interest Form
              </a>
              <a
                href="https://forms.gle/bFhpZPFDNdcj39q9A"
                target="_blank"
                className={styles.contactForm}
              >
                Corporate Sponsor Interest Form
              </a>
              <a
                href="https://forms.gle/ybUAHDBbNmAP82Dr9"
                target="_blank"
                className={styles.contactForm}
              >
                Alumni Interest Form
              </a>
            </div>
          </div>

          <div className={styles.contactImageContainer}>
            <Image
              src="/sponsors/sponsorsBG.webp"
              alt="background image"
              width={500}
              height={500}
              className={styles.contactImage}
              unoptimized
            />
          </div>
        </div>
      </section>
      <section id="community">
        <div className={styles.communityContainer}>
          <h1 className={styles.communityHeading}>Join Our Community</h1>
          <p className={styles.communityDescription}>
            Join our email list to stay updated on our events and receive our
            newsletters.
          </p>
        </div>
      </section>
    </>
  );
}
