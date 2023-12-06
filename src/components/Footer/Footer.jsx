import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const social = [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      img: "/1.png"
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
      img: "/2.png"
    },
    {
      name: "x",
      url: "https://www.x.com/",
      img: "/3.png"
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/",
      img: "/4.png"
    },
  ]
  return (
    <div className={styles.container}>

      <span>@all rights reserved</span>

      <div className={styles.socialNetworks}>
        {social.map(icon => {
          return (
            <Link href={icon.url} target="_blank">
              <Image
                src={icon.img}
                width={15}
                height={15}
                className={icon.name}
                alt={icon.name}
              />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Footer;