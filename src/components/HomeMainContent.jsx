import React, { useEffect, useState } from "react";

const DataCard = (props) => {
  /* <div>{props.screenshots}</div><div>{props.shortDesc}</div> */
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
  if (props.genreFilter !== "")
    if (props.genre.toLowerCase() !== props.genreFilter.toLowerCase()) return;
  //console.log(props.genreFilter);
  return (
    <div className="game-card" id={props.id}>
      <img src={props.thumbnail} alt={props.title} height="206" width="365" />
      <div>{props.title}</div>
      <div>{props.platform}</div>
      <div>{props.genre}</div>
      <div>{props.url}</div>
    </div>
  );
};
//function HomeMainContent() {
const HomeMainContent = (props) => {
  const [gameData, setGameData] = useState([]);
  const showGameData = (data) => {
    // console.log(data);
    // console.log(data.id);
    // console.log(data.title);
    // console.log(data.platform);
    // console.log(data.thumbnail);
    // console.log(data.genre);
    // console.log(data.game_url);
    // console.log(data.screenshots);
    // console.log(data.short_description);
    //console.log(gameData);
  };
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
        //showGameData(response);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="main-content">
      <div className="game-card-block">
        {gameData.map((g) => (
          <DataCard
            genreFilter={props.genre}
            platformFilter={props.platform}
            key={g.id}
            id={g.id}
            title={g.title}
            platform={g.platform}
            thumbnail={g.thumbnail}
            genre={g.genre}
            url={g.game_url}
            screens={g.screenshots}
            shortDesc={g.short_description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeMainContent;
