'use client';
import { useState } from 'react';
import styles from './alumniSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import alumni from '@/app/(routes)/alumni/alumni.json';

import PopUp from '@/app/_components/popUp';

interface AlumniSwiperProps {
  width: number;
  height: number;
}

interface Alumni {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function AlumniSwiper({ width, height }: AlumniSwiperProps) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState({
    name: '',
    role: '',
    image: '',
    bio: '',
  });

  const handleshowProfile = (alumni: Alumni) => {
    console.log('clicked');
    setSelectedAlumni(alumni);
    setShowPopUp(true);
  };

  const handlecloseProfile = () => {
    setSelectedAlumni({
      name: '',
      role: '',
      image: '',
      bio: '',
    });
    setShowPopUp(false);
  };

  return (
    <div>
      <div
        className={`${styles.overlay} ${showPopUp ? styles.showOverlay : ''}`}
      ></div>

      {showPopUp && selectedAlumni && (
        <PopUp
          imageURL={`/alumni/advisorImages/${selectedAlumni.image}`}
          name={selectedAlumni.name.slice(0, -4)}
          role={selectedAlumni.role}
          bio={selectedAlumni.bio}
          onCloseProfile={handlecloseProfile}
        />
      )}
      <Swiper
        modules={[Navigation]}
        navigation
        className={styles.advisorCarousel}
      >
        {alumni.advisors.map((advisor, index) => {
          return (
            <SwiperSlide key={index} className={styles.advisorSlide}>
              <div
                className={styles.advisorProfile}
                onClick={() => handleshowProfile(advisor)}
              >
                <div className={styles.advisorImageContainer}>
                  <Image
                    src={`/alumni/advisorImages/${advisor.image}`}
                    alt="alumni advisor headshot"
                    width={width}
                    height={height}
                  />
                </div>
                <div className={styles.advisorInfoContainer}>
                  <h5 className={styles.alumniAdvisorName}>
                    {advisor.name.slice(0, -4)}
                  </h5>
                  <h5 className={styles.alumniAdvisorTitle}>{advisor.role}</h5>
                  <p className={styles.alumniAdvisorRole}>{advisor.type}</p>
                  <p className={styles.alumniAdvisorClass}>
                    MIT Class of {advisor.class}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
