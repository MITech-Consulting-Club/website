'use client';
import styles from './about.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import exec from './exec.json';

const About = () => {
  return (
    <div>
      <div className={styles.teamContainer}>
        <div className={styles.teamBox}>
          <h1 className={styles.teamHeading}>The MITech Team</h1>
          <h6 className={styles.teamMiniHeading}>
            Finding Inspiration in Every Turn
          </h6>
          <p className={styles.teamDescription}>
            We are a diverse group of talented students from various disciplines
            that are passionate about community-building and problem-solving
            with technology. At MITech Consulting Club, we seek to empower
            students to become tech leaders and consultants by delivering
            practical projects and fostering a culture of continuous learning.
            Through mentorship, professional development, and a vibrant
            community, we create an environment where members thrive, making a
            meaningful impact in the ever-evolving world of technology
            consulting.
          </p>
        </div>
      </div>
      <div className={styles.initiativesContainer}>
        <h1 className={styles.initiativesHeading}>Initiatives</h1>
        <div className={styles.initiativesCardsContainer}>
          <div className={styles.initiativesCard}>
            <Image
              className={styles.cardAvatar}
              src="/about/projects.jpeg"
              alt="projects image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Projects</div>
            <div className={styles.cardDescription}>
              Our members work directly with large companies & startups on
              projects that impact their businesses, allowing our members to
              gain hands-on experience, apply their technical skills, and
              deliver profound results.
            </div>
          </div>
          <div className={styles.initiativesCard}>
            <Image
              className={styles.cardAvatar}
              src="/about/professionalDevelopment.png"
              alt="professional development image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Professional Development</div>
            <div className={styles.cardDescription}>
              Partnering with recruiters, industry professionals, and MIT
              alumni, we offer a variety of coaching including resume reviews
              and interview preparation workshops.
            </div>
          </div>
          <div className={styles.initiativesCard}>
            <Image
              className={styles.cardAvatar}
              src="/about/mentorship.jpeg"
              alt="mentorship image"
              width={100}
              height={100}
              unoptimized
            />
            <div className={styles.cardTitle}>Mentorship & Community</div>
            <div className={styles.cardDescription}>
              We are a tight-knit community centered around education and
              collaboration, and we empower our members by establishing
              mentorship systems, an education curriculum, and on-going club
              initiatives.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.meetTeamContainer}>
        <h2 className={styles.meetTeamHeading}>Meet Our Executive Team</h2>
        <h6 className={styles.meetTeamDescription}>
          What makes MITech so special
        </h6>
        <div className={styles.teamPhotosContainer}>
          {exec.team.map((member) => {
            return (
              <div className={styles.execProfile}>
                <Image
                  src={`/about/execImages/${member.image}`}
                  alt="exec image"
                  width={300}
                  height={300}
                  className={styles.execHeadshot}
                />
                <div className={styles.execInfoContainer}>
                  <h3 className={styles.execName}>{member.name}</h3>
                  <h4 className={styles.execRole}>{member.role}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.joinUsContainer}>
        <h3 className={styles.joinUsHeading}>Interested in Joining Us?</h3>
        <p className={styles.joinUsDescription}>
          We are always looking for more passionate technologists to join our
          team to continue working towards our mission and making MITech a
          special community. Found out more about our recruitment cycle and how
          to become part of the team.
        </p>
        <Link href="/joinUs" className={styles.joinUsButton}>
          Visit Here
        </Link>
      </div>
    </div>
  );
};

export default About;
