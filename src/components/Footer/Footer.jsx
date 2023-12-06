import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const social = [
    {
      name: "facebook",
      url: "https://www.facebook.com",
      img:"/1.png"
    },
    {
      name: "instagram",
      url: "https://www.instagram.com",
      img:"/2.png"
    },
    {
      name: "x",
      url: "https://www.x.com",
      img:"/3.png"
    },
    {
      name: "youtube",
      url: "https://www.youtube.com",
      img:"/4.png"
    },
  ]
  return (
    <div className={styles.container}>

      <span>@all rights reserved</span>

      <div className={styles.socialNetworks}>
        {
          social.map(icon => {
            return (
              <Link href={icon.url} key={icon.name}>
                <Image
                  src={icon.img}
                  alt={icon.anme}
                  width={15}
                  height={15}
                  className={styles.icon}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default Footer;