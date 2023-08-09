'use client';
import React from 'react';
import styles from './services.module.scss';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';

const Services = () => {
  return (
    <div>
      <div className={styles.ourServicesContainer}>
        <h1 className={styles.ourServicesHeading}>Our Services</h1>
        <p className={styles.ourServicesDescription}>
          We are a comprehensive technology consulting club that offering a wide
          range of services including software development, web and mobile
          development, data analysis, business strategy, and more. Our team of
          rigorously-trained consultants is equipped to tackle diverse projects
          and provide tailored solutions to meet your specific needs. If you're
          looking for expertise in any of these areas, we invite you to reach
          out and connect with us below. We are eager to discuss how our
          services can help drive your business forward and achieve your goals.
        </p>
        <div className={styles.ourServicesCardsContainer}>
          <div className={styles.ourServicesCard}>
            <Image
              src="/services/cloud.png"
              alt="service"
              width={112.5}
              height={72}
              className={styles.ourServicesAvatar}
            />
            <p className={styles.ourServicesTitle}>Software Engineering</p>
          </div>
          <div className={styles.ourServicesCard}>
            <Image
              src="/services/mobile.png"
              alt="service"
              width={50}
              height={75}
              className={styles.ourServicesAvatar}
            />
            <p className={styles.ourServicesTitle}>Web & Mobile Development</p>
          </div>
          <div className={styles.ourServicesCard}>
            <Image
              src="/services/chart.png"
              alt="service"
              width={100}
              height={75}
              className={styles.ourServicesAvatar}
            />
            <p className={styles.ourServicesTitle}>Data Analysis</p>
          </div>
          <div className={styles.ourServicesCard}>
            <Image
              src="/services/suitcase.png"
              alt="service"
              width={100}
              height={75}
              className={styles.ourServicesAvatar}
            />
            <p className={styles.ourServicesTitle}>Business Development</p>
          </div>
        </div>
      </div>
      <div className={styles.projectStructureContainer}>
        <h4 className={styles.projectStructureHeading}>Project Structure</h4>
        <p className={styles.projectStructureDescription}>
          MITech engages with clients for 10-12 week projects during the Fall
          and Spring semesters, with each project team consists of a Project
          Leader and five other consultants. The team will meet with the client
          on a weekly basis, which the client will have the opportunity to
          provide feedback on the team's performance directly to our
          Co-Presidents, VP External as well as Director of Projects & Client
          Relations. Our consultant team will provide two deliverables (midterm
          and final), and project management tools are utilized to keep both
          clients and consultants on track for a successful project.
        </p>
      </div>
      <div className={styles.contactUsContainer}>
        <div className={styles.leftTextContainer}>
          <h6 className={styles.contactUsMiniHeading}>Contact Us</h6>
          <h4 className={styles.contactUsHeading}>Get In Touch</h4>
          <p className={styles.contactUsDescription}>
            Want to learn more about our services or schedule a consultation?
            Fill out our client interest form or reach out to our team and we
            will get back to you as soon as possible. We are currently sourcing
            projects for Fall 2023 and we would love to hear from you!
          </p>
        </div>
        <div className={styles.rightProfilesContainer}>
          <div className={styles.profile}>
            <div className={styles.squareImageWrapper}>
              <Image
                src="/services/nayeemur.jpg"
                alt="profile"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.profileInfoContainer}>
              <h5 className={styles.profileName}>Nayeemur Rahman</h5>
              <p className={styles.profileTitle}>Director of Projects</p>
              <p className={styles.profileEmail}>nayeem31@mit.edu</p>
              <a
                href="https://www.linkedin.com/in/nayeemurrahman/"
                target="_blank"
                className={styles.socialIcon}
              >
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className={styles.profile}>
            <div className={styles.squareImageWrapper}>
              <Image
                src="/services/colin.jpg"
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profileInfoContainer}>
              <h5 className={styles.profileName}>Colin Clark</h5>
              <p className={styles.profileTitle}>VP External</p>
              <p className={styles.profileEmail}>colclark@mit.edu</p>
              <a
                href="https://www.linkedin.com/in/superc03/"
                target="_blank"
                className={styles.socialIcon}
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
