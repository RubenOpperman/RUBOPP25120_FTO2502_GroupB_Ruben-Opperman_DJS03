import { useEffect, useState } from "react";

import Navbar from "./components/header";
import MainContent from "./components/mainContent";

import { fetchPodcastData } from "./data/podcastData";

import "./App.css";

function App() {
  const [podcastData, setPodcastData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchPodcastData();
      setPodcastData(data);
    }
    getData();
  }, []);

  const podcasts = podcastData.map((podcast) => (
    <MainContent
      key={podcast.id}
      id={podcast.id}
      title={podcast.title}
      description={podcast.description}
      seasons={podcast.seasons}
      img={podcast.image}
    />
  ));

  return (
    <>
      <Navbar />
      {podcasts}
    </>
  );
}

export default App;
