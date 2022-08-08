import React from "react";
import styles from "./RouteCard.module.css";
import Image from "next/image";

const RouteCard = ({ title, image, alt }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.background}
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default RouteCard;
