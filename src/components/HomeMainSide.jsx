import React from "react";

const HomeMainSide = (props) => {
  const { platforms, genres, sortby } = props;
  return (
    <div className="main-side">
      <ul id="platforms">
        {platforms.map((platform) => (
          <li
            key={platform}
            id={platform}
            onClick={(e) => {
              props.onPlatformsClick(e);
            }}
          >
            <div>{platform.toUpperCase()}</div>
          </li>
        ))}
      </ul>
      <ul id="Genre">
        {genres.map((genre) => (
          <li
            key={genre}
            id={genre}
            onClick={(e) => {
              props.onGenresClick(e);
            }}
          >
            <div>{genre.toUpperCase().replace(/-/g, " ")}</div>
          </li>
        ))}
      </ul>
      <ul>
        {sortby.map((sort) => (
          <li
            key={sort}
            id={sort}
            onClick={(e) => {
              props.onSortbyClick(e);
            }}
          >
            <div>{sort.toUpperCase().replace(/-/g, " ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMainSide;
