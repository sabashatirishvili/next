"use client";

import React, { useEffect, useState } from "react";

function Crud() {
  const handleDelete = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/osts/1`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error while fetching resource.");
    }
  };
  return (
    <div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Crud;
