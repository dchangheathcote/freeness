import React from "react";

const HomeMainSide = (props) => {
  const { platforms, genres, sortby } = props;
  return (
    <div id="main-side" className="main-side open">
      <div>
        <p className="side-nav-title">Platforms</p>
        <ul id="platforms" className="nav">
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
        <p className="side-nav-title">Genres</p>
        <ul id="genre" className="nav">
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
        <p className="side-nav-title">
          <a href="https://freetogame.com" target="_blank">
            API from Freetogame.com
          </a>
        </p>

        {/* <ul id="sort" className="nav">
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
      </ul> */}
      </div>
    </div>
  );
};

export default HomeMainSide;
