import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import IntroCard from "./IntroCard";
import RouteCard from "./RouteCard";
import WhoIAmImage from "../public/MugShot.png";
import WhatIDidImage from "../public/BoardGame.jpg";
import Placeholder from "../public/nic-cage-eyes.jpg";
import UON from "../public/logo-primary-single-col-blk.png";
import SOC from "../public/SoC-Logo.png";
import potential from '../public/potential.jpg'

export default function Home() {
  const whoIAm = {
    title: "Who I Am",
    image: WhoIAmImage,
    alt: "A flattering photo of the creator of the Portfolio",
  };
  const whatIDid = {
    title: "What I Have Done",
    image: WhatIDidImage,
    alt: "Birds-Eye view of a board game set out on a table",
  };
  const whatICan = {
    title: "What I Can Do",
    image: Placeholder,
    alt: "Birds-Eye view of a board game set out on a table",
  };
  const whatIWant = {
    title: "What I Am Learning",
    image: Placeholder,
    alt: "Birds-Eye view of a board game set out on a table",
  };
  const NottLogo = {
    image:UON,
    alt:"University of Nottingham Logo"
  }
  const SoCLogo = {
    image:SOC,
    alt:"School of Code Logo"
  }
  const PotentialLogo = {
    image:potential,
    alt:"Road Sign that says potential"
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.opener}>
          <h2>Thank you for visiting! My name is:</h2>
          <h1 className={styles.title}>Christophe Charbonneau-Freeston</h1>
          <section className={styles.rowcard}>
            <IntroCard
              title="What I Was"
              description="Chemical Engineering Graduate"
              icon={NottLogo}
            />
            <IntroCard
              title="What I Am"
              description="Graduate Full-Stack Web Devloper"
              icon={SoCLogo}
            />
            <IntroCard title="What I Will Be" description="???" icon={PotentialLogo}/>
          </section>
        </section>

        <section className={styles.routes}>
          <Link href="/about">
            <a>
              <RouteCard
                title={whoIAm.title}
                image={whoIAm.image}
                alt={whoIAm.alt}
              />
            </a>
          </Link>
          <Link href="/portfolio">
            <a>
              <RouteCard
                title={whatIDid.title}
                image={whatIDid.image}
                alt={whatIDid.alt}
              />
            </a>
          </Link>
          <Link href="/skills">
            <a>
              <RouteCard
                title={whatICan.title}
                image={whatICan.image}
                alt={whatICan.alt}
              />
            </a>
          </Link>
          <Link href="/learning">
            <a>
              <RouteCard
                title={whatIWant.title}
                image={whatIWant.image}
                alt={whatIWant.alt}
              />
            </a>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}