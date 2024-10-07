import React from "react";
import { useState, useEffect } from "react";
export default function BodyImage() {
  let [product, setProduct] = useState([]);
  let [Search, setSearch] = useState("search");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=46193706-4e881426d33fe27ebcb24f42a&q=${Search}+flowers&image_type=photo&pretty=true`
    )
      .then((val) => val.json())
      .then((val) => setProduct(val.hits));
    console.log(product);
  }, [Search]);

  function fetchData(e) {
    setSearch(e.target.value);
    console.log("search got set");
  }
  return (
    <>
      <div id="img1">
        <h1 id="img-head">Stunning royalty-free images & royalty-free </h1>
        <h6 id="img-head2">
          Over 5 million+ high quality stock images, videos and music shared by
          our talented community.
        </h6>
        <input
          type="text"
          id="input"
          placeholder="   Search here"
          onChange={fetchData}
        />
      </div>
      <div id="div2">
        {product
          .filter((val) =>
            val.tags.toLowerCase().includes(Search.toLowerCase())
          )
          .map((val) => {
            return (
              <img
                key={val.id}
                src={val.previewURL}
                alt={val.tags}
                id="outimg"
              />
            );
          })}
      </div>
    </>
  );
}
