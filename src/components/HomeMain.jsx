import React, { useState } from "react";
import HomeMainSide from "./HomeMainSide";
import HomeMainContent from "./HomeMainContent";

function HomeMain() {
  const platformsArr = ["pc", "browser"];

  const genresArr = [
    "all",
    "mmorpg",
    "mmoarpg",
    "arpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "mmo",
    "mmofps",
    "fantasy",
    "fighting",
    "card game",
  ];

  const sortbyArr = ["release-date", "popularity", "alphabetical", "relevance"];
  const API = "https://www.freetogame.com/api/games";
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortby, setSortby] = useState("");

  const handlePlatformsClick = (e) => {
    const childs = document.getElementById("platforms").childNodes;
    childs.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setPlatform(e.currentTarget.id);
  };
  const handleGenresClick = (e) => {
    const g = e.currentTarget.id === "all" ? "all" : e.currentTarget.id;
    const childs = document.getElementById("genre").childNodes;
    childs.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setGenre(g);
  };
  const handleSortbyClick = (e) => {
    console.log("sortby", e.currentTarget.id);
  };
  return (
    <div className="main-layout">
      <HomeMainSide
        platforms={platformsArr}
        genres={genresArr}
        sortby={sortbyArr}
        onPlatformsClick={handlePlatformsClick}
        onGenresClick={handleGenresClick}
        onSortbyClick={handleSortbyClick}
      />
      <HomeMainContent platform={platform} genre={genre} />
    </div>
  );
}

export default HomeMain;
