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
      updated={podcast.updated}
      genres={podcast.genres}
    />
  ));

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  bg-Background">
        {podcasts}
      </div>
    </>
  );
}

export default App;
