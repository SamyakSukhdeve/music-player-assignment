import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const data = [
    {
      title: "Die With A Smile ",
      thumbnail: "/assets/images/Die With A Smile.jpg",
      musicUrl:
        "/assets/audio/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3",
      duration: "4:12",
      artistName: "Lady Gaga, Bruno Mars",
    },
    {
      title: "luther",
      thumbnail: "/assets/images/luther.jpg",
      musicUrl: "/assets/audio/Kendrick Lamar - luther (Official Audio).mp3",
      duration: "2:57",
      artistName: "Kendrick Lamar ",
    },
    {
      title: "blue ",
      thumbnail: "/assets/images/blue.jpg",
      musicUrl: "/assets/audio/blue.mp3",
      duration: "3:41",
      artistName: "yung kai ",
    },
    {
      title: "Father Ocean",
      thumbnail: "/assets/images/fatherocean.jpg",
      musicUrl: "/assets/audio/fatherocean.mp3",
      duration: "5:18",
      artistName: "Ben Böhmer Remix Edit",
    },
    {
      title: "After Hours",
      thumbnail: "/assets/images/afterhours.jpg",
      musicUrl: "/assets/audio/afterhours.mp3",
      duration: "6:01",
      artistName: "The Weeknd",
    },
  ];
  const [activeTab, setActiveTab] = useState("foryou");
  const [filtredData, setFiltredData] = useState(data);
  const [currentSong, setCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(null);
  const [fav, setFav] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const storedRecent =
      JSON.parse(sessionStorage.getItem("recentlyPlayed")) || [];
    setRecent(storedRecent);
  }, [recent]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites")) || [];
    setFav(storedFav);
  }, [fav]);

  const prevSong = () => {
    const index = data.findIndex((i) => i.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(data[data.length - 1]);
    } else [setCurrentSong(data[index - 1])];
    setIsPlaying(true);
  };

  const nextSong = () => {
    const index = data.findIndex((i) => i.title == currentSong.title);
    if (index == data.length - 1) {
      setCurrentSong(data[0]);
    } else [setCurrentSong(data[index + 1])];
    setIsPlaying(true);
  };

  return (
    <AppContext.Provider
      value={{
        setActiveTab,
        activeTab,
        data,
        setFiltredData,
        filtredData,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        prevSong,
        nextSong,
        setFav,
        fav,
        recent,
        setRecent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
