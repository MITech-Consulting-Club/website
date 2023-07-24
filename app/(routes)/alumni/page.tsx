'use client';

import styles from './alumni.module.scss';

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
            <img
                className={styles.cardAvatar}
              src="https://www.memphis.edu/healthsciences/images/twopeopleatdesk.png"
            />
            <div className={styles.cardTitle}>Advising</div>
            <div className={styles.cardDescription}>
              We collaborate with selected alumni to provide both group and
              individual advising sessions, on topics ranging from picking a
              major at MIT to applying for opportunities beyond undergrad.
            </div>
          </div>
          <div className={styles.alumniEngagementsCard}>
            <img
                className={styles.cardAvatar}
              src="https://www.kweekcommunicatie.nl/wp-content/uploads/2021/11/74d63284938cb5b16e0efc1d1cf2-1625062.jpgd_-1.jpeg"
            />
            <div className={styles.cardTitle}>Network</div>
            <div className={styles.cardDescription}>
              We help our members establish long-lasting relationships with
              leading professionals in the tech industry by providing them with
              networking opportunities and established club-alumni connections.
            </div>
          </div>
          <div className={styles.alumniEngagementsCard}>
            <img
                className={styles.cardAvatar}
              src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-hand-drawn-cartoon-2019-new-year-friends-gathering-new-years-png-image_3849295.jpg"
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
        <div className={styles.alumniAdvisorsCarouselContainer}>
          <img
              className={styles.alumniAdvisorsProfessionalHeadshot}
            src="https://static.wixstatic.com/media/bcc1c2_d97a40f653584d68ac0e13e647a0b511~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SamKwei.jpg"
          />
          <div className={styles.alumniAdvisorInfoContainer}>
            <h3 className={styles.alumniAdvisorName}>Sam Kwei '05</h3>
            <h4 className={styles.alumniAdvisorRole}>
              Staff Technical Account Manager at Google
            </h4>
            <p className={styles.alumniAdvisorType}>
              Professional Development Advisor
            </p>
          </div>
        </div>
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
        <img
            className={styles.alumniSupportingMitechLeftImg}
          src="https://static.wixstatic.com/media/11062b_916e6674cff64736acbf49ae13678e99~mv2.jpeg/v1/fill/w_976,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_916e6674cff64736acbf49ae13678e99~mv2.jpeg"
        ></img>
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
