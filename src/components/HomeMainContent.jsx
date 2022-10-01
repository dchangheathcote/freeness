import React, { useEffect, useState } from "react";

const DataCard = (props) => {
  return (
    <div className="game-card">
      <div>{props.id}</div>
      <div>{props.title}</div>
      <div>{props.platform}</div>
      <div>{props.thumbnail}</div>
      <div>{props.genre}</div>
      <div>{props.url}</div>
      <div>{props.screenshots}</div>
      <div>{props.shortDesc}</div>
    </div>
  );
};
//function HomeMainContent() {
const HomeMainContent = () => {
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
      {gameData.map((g) => (
        <DataCard
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
  );
};

export default HomeMainContent;
