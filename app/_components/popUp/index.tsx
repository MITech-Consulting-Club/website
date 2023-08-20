import styles from './popUp.module.scss';

import Image from 'next/image';

interface PopUpProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  onCloseProfile: () => void;
}

const PopUp = ({ image, name, role, bio, onCloseProfile }: PopUpProps) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.card}>
        <Image
          src={`/about/execImages/${image}`}
          alt="profile"
          width={500}
          height={500}
          className={styles.profileImage}
        />
        <div className={styles.profileContainer}>
          <p className={styles.profileName}>{name}</p>
          <p className={styles.profileRole}>{role}</p>
          <p className={styles.profileBio}>{bio}</p>
        </div>
        <button className={styles.closeButton} onClick={onCloseProfile}>
          x
        </button>
      </div>
      <div
        className={`${
          name == 'Nayeemur Rahman' ? styles.animationBackground : ''
        }`}
      ></div>
    </div>
  );
};

export default PopUp;
