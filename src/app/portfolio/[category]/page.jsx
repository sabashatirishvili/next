import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Category({ params }) {
  const data = [
    {
      id: 0,
      name: "Creative Portfolio",
      src: "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 1,
      name: "Minimal Single Product",
      src: "https://images.pexels.com/photos/19396221/pexels-photo-19396221/free-photo-of-winters-coming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Strong Together Charity",
      src: "https://images.pexels.com/photos/19381650/pexels-photo-19381650/free-photo-of-a-squirrel-sitting-on-a-tree-stump.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((card) => {
        return (
          <div key={card.id} className={styles.item}>
            <div className={styles.content}>
              <h1>{card.name}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur vel tenetur necessitatibus unde natus perspiciatis,
                amet cupiditate ducimus possimus, eaque ex autem id nobis eum
                dolorem. Neque eveniet fugiat tenetur?
              </p>
              <Button title={"see more"} url={"/"} />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={card.src}
                alt="image"
                fill={true}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
