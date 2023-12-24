import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Data fetch failed.");
  }

  return res.json();
};

async function Blog() {
  const data = await getData();
  console.log(data);

  return (
    <div className={styles.pageContainer}>
      {data.map((blogPost) => (
        <Link
          key={blogPost.id}
          href={`blog/${blogPost.id}`}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={blogPost.images[0]}
              alt="blog_image"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blogPost.title}</h1>
            <p className={styles.desc}>{blogPost.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
