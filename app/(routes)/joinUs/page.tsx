import styles from './joinUs.module.scss';
import Image from 'next/image';

import SPONSORSBG from '@/app/_assets/sponsorsBG.webp';
import MAGGIE from '@/app/_assets//about/execImages/maggie.jpg';
import KAREN from '@/app/_assets//about/execImages/karen.jpg';

const joinUs = () => {
  return (
    <div>
      <div className={styles.getInvolvedContainer}>
        <Image
          className={styles.getInvolvedImage}
          src={SPONSORSBG}
          alt="abstract image"
        />
        <div className={styles.getInvolvedTextContainer}>
          <h1 className={styles.getInvolvedHeading}>Get Involved</h1>
          <p className={styles.getInvolvedDescription}>
            We are always looking for more aspiring leaders who are passionate
            about technology to join our team. Check this page regularly to stay
            updated on our recruitment and MIT-wide events and stay in touch
            with us!
          </p>
        </div>
      </div>

      <div className={styles.lookForContainer}>
        <div className={styles.lookForLeftTextContainer}>
          <h1 className={styles.lookForHeading}>Who Do We Look For?</h1>
        </div>
        <div className={styles.lookForRightTextContainer}>
          <h5 className={styles.lookForMiniHeading}>
            MITech strives to empower the next generation of tech leaders.
          </h5>
          <p className={styles.lookForDescription}>
            We are looking for individuals who aspire to become compassionate
            leaders in the era of rapid technology advancement & innovation,
            regardless of one's major, hobbies, or career aspirations. While we
            are a community brought together by our shared passion of
            technology, we have a diverse range of interests and careers
            pursuits including tech, consulting, engineering, finance, and
            biotech.
          </p>
        </div>
      </div>

      <div className={styles.questionsContainer}>
        <div className={styles.questionsCardsContainer}>
          <div className={styles.questionsCard}>
            <h5 className={styles.cardHeading}>
              Do I have to be a Course 6 to join MITech?
            </h5>
            <p className={styles.cardDescription}>
              Not at all! We welcome people from all majors and backgrounds to
              join us. In fact, don't ever feel pressured that you have to be a
              6-3: you may be able to bring in different insights! Our team
              currently studies in many different areas as well (from Course 2
              to Course 15 to Course 7, you get the gist).
            </p>
          </div>
          <div className={styles.questionsCard}>
            <h5 className={styles.cardHeading}>
              What about prior experiences?
            </h5>
            <p className={styles.cardDescription}>
              Not at all! Your interest in technology and/or consulting is all
              we need! Many of us do not have prior experiences but we all love
              learning new things and solving problems together.
            </p>
          </div>
          <div className={styles.questionsCard}>
            <h5 className={styles.cardHeading}>
              Eh, I don't even know how to code at all...
            </h5>
            <p className={styles.cardDescription}>
              That's completely okay too! While we do have 6.100A/6.100L as a
              co-requisite upon joining MITech, we have developed a
              comprehensive education program to support everyone on their
              projects. All of us are more than willing to help you too if you
              have a question on anything!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.directorsContainer}>
        <h1 className={styles.directorsHeading}>
          Meet Our Directors of Recruitment!
        </h1>
        <p className={styles.directorsDescription}>
          Our team who brings all the swags, food, and MITech-awesomeness to
          you!
        </p>
        <div className={styles.directorsProfilesContainer}>
          <div className={styles.directorProfile}>
            <Image
              src={MAGGIE}
              alt="director image"
              className={styles.directorHeadshot}
            />
            <div className={styles.directorInfoContainer}>
              <h3 className={styles.directorName}>Maggie Yu</h3>
              <h4 className={styles.directorRole}>Director of Recruitment</h4>
            </div>
          </div>

          <div className={styles.directorProfile}>
            <Image
              src={KAREN}
              alt="director image"
              className={styles.directorHeadshot}
            />
            <div className={styles.directorInfoContainer}>
              <h3 className={styles.directorName}>Karen Guo</h3>
              <h4 className={styles.directorRole}>Director of Recruitment</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.joinCommunity}>
        <h1 className={styles.joinCommunityHeading}>Join Our Community</h1>
        <p className={styles.joinCommunityDescription}>
          Join our email list to stay updated on our recruitment & MIT-wide
          events and receive our newsletters. This page will soon be updated
          with our recruitment events this Fall!
        </p>
      </div>
    </div>
  );
};

export default joinUs;
