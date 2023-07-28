'use client';
import styles from './sponsors.module.scss';

const Sponsors = () => {
  return (
    <div>
      <div className={styles.sponsorsTopContainer}>
        <h1 className={styles.sponsorsTopHeading}>Sponsors & Partnerships</h1>
      </div>
      <div className={styles.sponsorsInterestContainer}>
        <div className={styles.sponsorsInterestLeftTextContainer}>
          <h1 className={styles.sponsorsInterestHeading}>
            Interested in Sponsoring MITech?
          </h1>
          <p className={styles.sponsorsInterestHeadingDescription}>
            More than just a tech consulting club.
          </p>
        </div>
        <div className={styles.sponsorsInterestRightTextContainer}>
          <h5 className={styles.sponsorsInterestDescription1}>
            We are currently looking for corporate sponsors.
          </h5>
          <p className={styles.sponsorsInterestDescription2}>
            Please reach out at <strong>mitech-corporate@mit.edu</strong> if you
            would like to learn more about our sponsorship packages & offerings.
            We would love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
