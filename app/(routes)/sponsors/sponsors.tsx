'use client';
import styles from './sponsors.module.scss';
import Link from 'next/link';

export default function Sponsors() {
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
            Please reach out at{' '}
            <u>
              <Link
                href="mailto:mitech-corporate@mit.edu"
                aria-label="mitech-corporate@mit.edu"
                target="_blank"
              >
                mitech-corporate@mit.edu
              </Link>
            </u>{' '}
            if you would like to learn more about our sponsorship packages &
            offerings. We would love to hear from you!
          </p>
        </div>
      </div>
      <div className={styles.packagesContainer}>
        <div className={styles.packagesCardsContainer}>
          <div className={styles.platinumCard}>
            <div className={styles.numberCircle}>1</div>
            <h5 className={styles.cardHeading}>Platinum Sponsor</h5>
            <ul className={styles.packageOffers}>
              <li>Premium Level of Company Branding & Presence</li>
              <li>Guaranteed Project Collaboration</li>
              <li>Access to resume book</li>
              <li>
                Unlimited small-scale (less than 50) club-sponsored events
              </li>
              <li>
                Up to two large-scale (50 or greater) club-sponsored events
              </li>
              <li>Guaranteed coffee chat slots with our members</li>
              <li>Tailored recruitment support</li>
            </ul>
          </div>
          <div className={styles.goldCard}>
            <div className={styles.numberCircle}>2</div>
            <h5 className={styles.cardHeading}>Gold Sponsor</h5>
            <ul className={styles.packageOffers}>
              <li>Advanced Company Branding & Presence</li>
              <li>Access to resume book</li>
              <li>Two small-scale (less than 50) club-sponsored events</li>
              <li>
                Up to one large-scale (50 or greater) club-sponsored events
              </li>
              <li>
                Limited coffee chat slots with our members (first come first
                served)
              </li>
            </ul>
          </div>
          <div className={styles.silverCard}>
            <div className={styles.numberCircle}>3</div>
            <h5 className={styles.cardHeading}>Silver Sponsor</h5>
            <ul className={styles.packageOffers}>
              <li>Standard Branding & Presence</li>
              <li>Access to resume book</li>
              <li>One small-scale (less than 50) club-sponsored event</li>
            </ul>
          </div>
          <div className={styles.aLaCarteCard}>
            <div className={styles.numberCircle}>4</div>
            <h5 className={styles.cardHeading}>À La Carte</h5>
            <ul className={styles.packageOffers}>
              <li>Guaranteed Project Collaboration</li>
              <li>Access to resume book</li>
              <li>Small-scale (less than 50) club-sponsored event</li>
              <li>Large-scale (50 or greater) club-sponsored event</li>
              <li>Guaranteed coffee chat slots with our members</li>
              <li>Company feature in quarterly newsletter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
