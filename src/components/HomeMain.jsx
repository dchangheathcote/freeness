import React, { useState } from "react";
import HomeMainSide from "./HomeMainSide";
import HomeMainContent from "./HomeMainContent";

function HomeMain() {
  const platformsArr = ["pc", "browser"];

  const genresArr = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  const sortbyArr = ["release-date", "popularity", "alphabetical", "relevance"];
  const API = "https://www.freetogame.com/api/games";
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [sortby, setSortby] = useState("");

  const handlePlatformsClick = (e) => {
    console.log("platforms", e.currentTarget.id);
  };
  const handleGenresClick = (e) => {
    console.log("genres", e.currentTarget.id);
  };
  const handleSortbyClick = (e) => {
    console.log("sortby", e.currentTarget.id);
  };
  return (
    <div>
      <HomeMainSide
        platforms={platformsArr}
        genres={genresArr}
        sortby={sortbyArr}
        onPlatformsClick={handlePlatformsClick}
        onGenresClick={handleGenresClick}
        onSortbyClick={handleSortbyClick}
      />
      <HomeMainContent />
    </div>
  );
}

export default HomeMain;
