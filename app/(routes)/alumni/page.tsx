'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './alumni.module.scss';
import alumni from './alumni.json';

const Alumni = () => {
  return (
    <div>
      <div className={styles.alumniTopContainer}>
        <div className={styles.alumniTopCard}>
          <h1 className={styles.alumniTopHeading}>Alumni</h1>
          <p className={styles.alumniTopDescription}>
            MITech is proud of the relationships that we establish with MIT
            alumni, which allows us to support the growth and development of our
            members. By working closely with alumni that are experts in the tech
            industry, we help our members gain valuable skills and connections.
          </p>
        </div>
      </div>
      <div className={styles.alumniEngagementsContainer}>
        <h1 className={styles.alumniEngagementsHeading}>Engagements</h1>
        <p className={styles.alumniEngagementsDescription}>
          MITech collaborates with MIT alumni in the three following ways to
          foster connections, mentorships, and community initiatives.
        </p>
        <div className={styles.alumniEngagementsCardsContainer}>
          <div className={styles.alumniEngagementsCard}>
            <Image
              className={styles.cardAvatar}
              src="/alumni/advising.png"
              alt="advising image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Advising</div>
            <div className={styles.cardDescription}>
              We collaborate with selected alumni to provide both group and
              individual advising sessions, on topics ranging from picking a
              major at MIT to applying for opportunities beyond undergrad.
            </div>
          </div>
          <div className={styles.alumniEngagementsCard}>
            <Image
              className={styles.cardAvatar}
              src="/alumni/network.png"
              alt="networking image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Network</div>
            <div className={styles.cardDescription}>
              We help our members establish long-lasting relationships with
              leading professionals in the tech industry by providing them with
              networking opportunities and established club-alumni connections.
            </div>
          </div>
          <div className={styles.alumniEngagementsCard}>
            <Image
              className={styles.cardAvatar}
              src="/alumni/events.png"
              alt="events image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Events</div>
            <div className={styles.cardDescription}>
              We organize large in-person & virtual events with alumni in our
              network + beyond to further facilitate connections and increase
              the club's involvement in the MIT community.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.alumniAdvisorsContainer}>
        <div className={styles.alumniAdvisorsLeftTextContainer}>
          <h1 className={styles.alumniAdvisorsHeading}>Our Alumni Advisors</h1>
          <p className={styles.alumniAdvisorsDescriptionP1}>
            From MITech's internal operations to students' professional
            development, our alumni advisors are pivotal to the success of
            MITech Consulting Club as well as the growth of our members. In
            addition to their specific roles, they are also matched with several
            MITech students to engage in regular advising sessions in the form
            of group lunches & dinners.
          </p>
          <p className={styles.alumniAdvisorsDescriptionP2}>
            Get to know our advisors and their involvement with the club by
            clicking into their profile. We have defined four main alumni
            advisors for the club necessary for our growth: Professional
            Development, Member Education, Internal Operations, and Initiatives
            & Projects.
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          className={styles.alumniAdvisorCarousel}
        >
          {alumni.advisors.map((advisor) => {
            return (
              <SwiperSlide>
                <div className={styles.alumniAdvisorsProfessionalHeadshot}>
                  <Image
                    src={`/alumni/advisorImages/${advisor.image}`}
                    alt="alumni advisor headshot"
                    fill
                    objectFit="contain"
                  />
                </div>
                <div className={styles.alumniAdvisorInfoContainer}>
                  <h3 className={styles.alumniAdvisorName}>{advisor.name}</h3>
                  <h4 className={styles.alumniAdvisorRole}>{advisor.role}</h4>
                  <p className={styles.alumniAdvisorType}>{advisor.type}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.alumniMentorsContainer}>
        <div className={styles.alumniMentorsLeftTextContainer}>
          <h1 className={styles.alumniMentorsHeading}>Alumni Career Mentors</h1>
        </div>
        <div className={styles.alumniMentorsRightTextContainer}>
          <p className={styles.alumniMentorsDescription}>
            In addition to our four main advisors, we aim to establish
            connections with alumni who are interested in mentoring our
            students. Our Alumni Career Mentors come from a wide range of
            industries including tech, consulting, finance, and biotech, and
            they work with our members individually to provide tailored career
            support and insights into their own industry experiences.
          </p>
        </div>
      </div>
      <div className={styles.alumniSupportingMitechContainer}>
        <div className={styles.alumniSupportingMitechRightTextContainer}>
          <h1 className={styles.alumniSupportingMitechHeading}>
            Supporting MITech
          </h1>
          <p className={styles.alumniSupportingMitechDescription}>
            We are always looking to welcome more people like you to join our
            community of talented students, alumni, and industry professionals
            who share a passion for technology, problem-solving, and
            community-building. If you are a MIT alum that is interested in
            supporting MITech, please don't hesitate to reach out to us at
            mitech-alumni@mit.edu; we would be more than happy to schedule a
            call to discuss your potential involvement!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
