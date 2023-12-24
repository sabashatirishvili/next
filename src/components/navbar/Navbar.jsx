import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

function Navbar() {
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Portfolio", url: "/portfolio" },
    { id: 4, title: "Contact", url: "/contact" },
    { id: 6, title: "Blog", url: "/blog" },
    { id: 7, title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div className={styles.main}>
      <Link className={styles.logo} href="/">
        Lamamia
      </Link>
      

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;
