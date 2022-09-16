import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Me from "../public/images/me.jpg";
export default function About() {
  return (
    <section className={styles.about + " section container center"} id='about'>
      <h3>
        <span className='red'>01.</span>About Me
      </h3>
      <div className={styles.contentWrapper}>
        <div className={styles.expoWrapper}>
          <p className={styles.exposition}>
            I&apos;m a Full-Stack developer specializing in building Web3
            applications and getting you connected to the metaverse.
            <br />
            <br />
            Whether you need to set up your next NFT drop or want to forray into
            the world of DeFi, I&apos;ve got you covered.
            <br />
            <br />
            I&apos;ve worked on teams big and small, remote &amp; in-person, and can adapt to any
            work environment.
            <br />
            <br />
            Here are a few technologies I&apos;ve been working with recently:
            <br />
            <br />
          </p>

          <div className={styles.listWrapper}>
            <ul>
              <li className='bullet'>Typescript</li>
              <li className='bullet'>NEXTjs</li>
              <li className='bullet'>React</li>
            </ul>
            <ul>
              <li className='bullet'>C/C++</li>
              <li className='bullet'>SQL/MongoDB</li>
              <li className='bullet'>Java (+Springboot)</li>
            </ul>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src={Me}
            alt='me'
            width='100%'
            height='100%'
            objectFit='contain'
            layout='responsive'
          />
        </div>
      </div>
    </section>
  );
}
