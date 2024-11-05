"use client"
// API PAGE

import { useState } from "react";

export default function Page() {

  const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
  const [data, setData] = useState(null);

  async function fetchData() {
    //when we running this fnction, when it hits await, will wait until whatever need to be done first
    const response = await fetch(DATA_URL);  //fetch is asynchronous. always return in object 
    console.log(response);
    const data = await response.json();
    console.log(data);
    setData(data);
  }

  const ProductList = () => {
    if (data) {

      let ProductList = [];

      // Loop through each items 
      data.forEach((product, index) => {
        productsList.push(
          <li key={index}>{product.name}</li>
        );
      });

      return (
        <div className="border-4 border-black p-4 mb-4">
          <ul>
            🍓
          </ul>
        </div>
      )
    } else {
      return (
        <div className="border-4 border-black p-4 mb-4">
            🥪
        </div>
      )

    }
  }

  
  return (
    <div className="p-4 bg-yellow-300">
      <header className="border-4 border-black p-4 mb-4">
        <h1>welcome to my product page</h1>
        <button 
          className="bg-white px-6"
          onClick={fetchData}
        >
            Fetch products!
        </button>
      </header>
      <ProductList />
    </div>
  );
}