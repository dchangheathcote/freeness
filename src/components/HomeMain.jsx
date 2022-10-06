import React, { useState } from "react";
import HomeMainSide from "./HomeMainSide";
import HomeMainContent from "./HomeMainContent";

/**
 *
 * @returns HomeMain Component to index.astro
 */
function HomeMain() {
  /**
   * platformsArr, genresArr are used to filter the game cards on HomeMainContent
   */
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
  /**
   * currently not used...
   */
  const sortbyArr = ["release-date", "popularity", "alphabetical", "relevance"];
  const API = "https://www.freetogame.com/api/games"; //not used
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortby, setSortby] = useState("");

  /**
   * handles the click event for platforms buttons
   * remove '.active' from other elements
   * set current to '.active'
   * setPlatform to update the state to filter by platform
   */
  const handlePlatformsClick = (e) => {
    const childs = document.getElementById("platforms").childNodes;
    childs.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setPlatform(e.currentTarget.id);
  };
  /**
   * handles the click event for genres buttons
   * remove '.active' from other elements
   * set current to '.active'
   * setGenre to update the state to filter by genre
   */
  const handleGenresClick = (e) => {
    const g = e.currentTarget.id === "all" ? "all" : e.currentTarget.id;
    const childs = document.getElementById("genre").childNodes;
    childs.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setGenre(g);
  };
  /**
   * not doing anything... yet
   */
  const handleSortbyClick = (e) => {
    console.log("sortby", e.currentTarget.id);
  };
  return (
    <div className='main-layout'>
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
