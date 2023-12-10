import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div className={styles.pageContainer}>
      <Link href="/blog/123" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17475709/pexels-photo-17475709/free-photo-of-a-person-standing-on-top-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog_image"
            width={400}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam
            dicta, saepe voluptate eaque quisquam corrupti nihil officiis sed
            quia commodi dignissimos earum autem blanditiis qui quidem sit
            recusandae magnam a aliquid? Ex, quos. Deserunt nemo, labore
            consequuntur corrupti, est cumque fugit consequatur pariatur
            molestiae veniam quis atque, eveniet delectus saepe alias fuga
            repellendus expedita eum laudantium maxime facilis doloribus!
            Excepturi corrupti corporis modi quisquam sequi praesentium
            repudiandae voluptatem obcaecati voluptate blanditiis, nulla libero
            aperiam pariatur qui molestiae fuga! Magni nostrum non ullam laborum
            dolorem, facere eveniet consectetur soluta omnis fuga veniam saepe
            adipisci sequi. Ipsa eum voluptatem nihil voluptas.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
