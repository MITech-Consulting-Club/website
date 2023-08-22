'use client';
import styles from './alumniSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import alumni from '@/app/(routes)/alumni/alumni.json';

interface AlumniSwiperProps {
  width: number;
  height: number;
}

export default function AlumniSwiper({ width, height }: AlumniSwiperProps) {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        className={styles.advisorCarousel}
      >
        {alumni.advisors.map((advisor, index) => {
          return (
            <SwiperSlide key={index} className={styles.advisorSlide}>
              <div className={styles.advisorProfile}>
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
