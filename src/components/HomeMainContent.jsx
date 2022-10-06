import React, { useEffect, useState } from "react";
import { getTheSlug } from "../utils/GameData.js";
/**
 * the component acts as a loading state
 * @returns The Rocket
 */
const Rocket = () => {
  return (
    <div className='loading'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
        />
      </svg>
    </div>
  );
};
/**
 * returns a DataCard element to HomeMain
 *
 * @param {*} props
 * @returns DataCard component
 */
const DataCard = (props) => {
  /**
   * some variables/svgs that I may want to use in the card
   */
  /**
   * I want to incorporate the short description on hover somehow
   *<div>{props.shortDesc}</div>
   */
  /*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
  <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
</svg>
*/
  /*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>
*/
  /**
   * filtering logic
   * if filtered genre === game genre
   */
  if (props.genreFilter !== "all")
    if (props.genre.toLowerCase() !== props.genreFilter.toLowerCase()) return;
  /**
   * filtering logic
   * if searchterm is in title
   */
  if (props.search !== "")
    if (!props.title.toLowerCase().includes(props.search.toLowerCase())) return;
  /**
   * filtering logic
   * if filtered platform === game platform
   */
  if (props.platformFilter !== "")
    if (
      !props.platform.toLowerCase().includes(props.platformFilter.toLowerCase())
    )
      return;

  const slug = getTheSlug(props.title);
  return (
    <div className='game-card' id={props.id}>
      <div className='game-card-inner'>
        <a href={slug}>
          <img
            src={props.thumbnail}
            alt={props.title}
            height='206'
            width='365'
          />
          <div className='game-card-body'>
            <div className='game-card-header'>
              <h2>{props.title}</h2>
              <span>by: {props.publisher}</span>
            </div>
            <div className='game-card-meta'>
              <div className='meta-item'>
                <span>Platform</span>
                {props.platform}
              </div>
              <div className='meta-item'>
                <span>Genre</span>
                {props.genre}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
const HomeMainContent = (props) => {
  /**
   * state variables
   * - gameData is all of the data from the API call
   * - searchVal is the text from the search field
   * - isLoading is used to put the rocket on the page while the API is being called
   */
  const [gameData, setGameData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  /**
   * onmount - get the json data from the API and populate the game cards
   *
   * when the payload is received - remove the rocket and update the DOM with <DataCard/>
   */
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.PUBLIC_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setGameData(response);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
    console.count();
  }, []);
  /**
   * update the searchVal state
   */
  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
  };
  /**
   * open / close the sidebar on smaller screens
   *
   * I had an error when trying to inport the <Footer/> component from astro
   */
  const handleFilter = (e) => {
    document.getElementById("main-side").classList.toggle("open");
  };
  return (
    <div className='main-content'>
      <div className='main-content-inner'>
        <div className='game-card-search'>
          <div className='game-card-search-inner'>
            <button className='filter-button' onClick={handleFilter}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                />
              </svg>
            </button>
            <input
              type='text'
              placeholder='search by title'
              onChange={handleOnChange}
              value={searchVal}
            />
            <button
              onClick={() => {
                setSearchVal("");
              }}
              title='Clear search'
            >
              clear
            </button>
          </div>
        </div>
        {isLoading && <Rocket />}
        <div className='game-card-block'>
          {gameData.map((g) => (
            <DataCard
              search={searchVal}
              genreFilter={props.genre}
              platformFilter={props.platform}
              key={g.id}
              id={g.id}
              title={g.title}
              publisher={g.publisher}
              platform={g.platform}
              thumbnail={g.thumbnail}
              genre={g.genre}
              url={g.game_url}
              screens={g.screenshots}
              shortDesc={g.short_description}
            />
          ))}
        </div>
        <footer className='footer'>
          <div className='free2game-attribution'>
            <a href='https://www.freetogame.com/' target='_blank'>
              <img
                src='https://www.freetogame.com/assets/images/logo-footer.png'
                alt='Data Powered by Free2Game'
              />
            </a>
          </div>
          <p>2022 Darryl Chang-Heathcote</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeMainContent;
