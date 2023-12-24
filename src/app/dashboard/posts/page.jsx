"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <br />
          <Link href={`/dashboard/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
