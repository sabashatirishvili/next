"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
function Dashboard() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [url]);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setUrl("https://jsonplaceholder.typicode.com/posts");
          }}
        >
          პირველი
        </button>
        <button
          onClick={() => {
            setUrl("https://api.escuelajs.co/api/v1/products");
          }}
        >
          მეორე
        </button>
      </div>
      <button>
        <Link href="/dashboard/crud">Go to CRUD Operations</Link>
      </button>
      <button>
        <Link href="/dashboard/posts">Posts</Link>
      </button>
    </div>
  );
}

export default Dashboard;
