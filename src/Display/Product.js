import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import people from "../data";

function Product(id) {
  // const id = 5;
  // console.log(id);

  return (
    <>
      {people.filter((id) => {
        people[5].id === id ? (
          console.log('hii')
        ) : (
console.log('hello')
          );
      })}
    </>
  );
}

export default Product;
