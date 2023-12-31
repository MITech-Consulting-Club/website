'use client';
import Image from 'next/image';
import AlumniSwiper from '@/app/_components/alumniSwiper';
import styles from './alumni.module.scss';

export default function Alumni() {
  return (
    <div>
      <div className={styles.topContainer}>
        <div className={styles.topCard}>
          <h1 className={styles.topHeading}>Alumni</h1>
          <p className={styles.topDescription}>
            MITech is proud of the relationships that we establish with MIT
            alumni, which allows us to support the growth and development of our
            members. By working closely with alumni that are experts in the tech
            industry, we help our members gain valuable skills and connections.
          </p>
        </div>
      </div>
      <div className={styles.engagementsContainer}>
        <h1 className={styles.engagementsHeading}>Engagements</h1>
        <p className={styles.engagementsDescription}>
          MITech collaborates with MIT alumni in the three following ways to
          foster connections, mentorships, and community initiatives.
        </p>
        <div className={styles.engagementsCardsContainer}>
          <div className={styles.engagementsCard}>
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
          <div className={styles.engagementsCard}>
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
          <div className={styles.engagementsCard}>
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
      <div className={styles.advisorsContainer}>
        <div className={styles.advisorsLeftTextContainer}>
          <h1 className={styles.advisorsHeading}>Our Alumni Advisors</h1>
          <p className={styles.advisorsDescriptionP1}>
            From MITech's internal operations to students' professional
            development, our alumni advisors are pivotal to the success of
            MITech Consulting Club as well as the growth of our members. In
            addition to their specific roles, they are also matched with several
            MITech students to engage in regular advising sessions in the form
            of group lunches & dinners.
          </p>
          <p className={styles.advisorsDescriptionP2}>
            Get to know our advisors and their involvement with the club by
            clicking into their profile. We have defined four main alumni
            advisors for the club necessary for our growth: Professional
            Development, Member Education, Internal Operations, and Initiatives
            & Projects.
          </p>
        </div>
        <div className={styles.alumniCarousel}>
          <AlumniSwiper width={250} height={250} />
        </div>
      </div>
      <div className={styles.mentorsContainer}>
        <div className={styles.mentorsLeftTextContainer}>
          <h1 className={styles.mentorsHeading}>Alumni Career Mentors</h1>
        </div>
        <div className={styles.mentorsRightTextContainer}>
          <p className={styles.mentorsDescription}>
            In addition to our four main advisors, we aim to establish
            connections with alumni who are interested in mentoring our
            students. Our Alumni Career Mentors come from a wide range of
            industries including tech, consulting, finance, and biotech, and
            they work with our members individually to provide tailored career
            support and insights into their own industry experiences.
          </p>
        </div>
      </div>
      <div className={styles.supportingMitechContainer}>
        <div className={styles.supportingMitechTextContainer}>
          <h1 className={styles.supportingMitechHeading}>Supporting MITech</h1>
          <p className={styles.supportingMitechDescription}>
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
}
