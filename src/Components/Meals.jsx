"use client";
import React, { useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState("");

  const leadData = async () => {
    const res =
      await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${search}
`);
const data = await res.json();
  setMeals(data.meals);
  };
  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="mt-12">
        <input
          onChange={handler}
          className="p-2 bg-gray-200 outline-none border-transparent"
          type="text"
          placeholder="Search here"
        ></input>
        <button className="p-2 bg-blue-200 text-blue-700 ">Search</button>
      </div>
    </div>
  );
};

export default Meals;
