'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Company" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Компания</span> Ariel — торговая марка, принадлежащая компании Procter&Gamble{' '}
        <span className="font-extrabold text-white">
          Ariel — торговая марка, принадлежащая компании Procter&Gamble
        </span>{' '}
        Procter&Gamble{' '}
        <span className="font-extrabold text-white">laundry detergent</span> you can
        easily explore the world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the company by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
