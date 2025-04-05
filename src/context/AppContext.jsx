import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const data = [
    {
      title: "Die With A Smile ",
      thumbnail: "/src/assets/images/Die With A Smile.jpg",
      musicUrl:
        "/src/assets/audio/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3",
      duration: "4:12",
      artistName: "Lady Gaga, Bruno Mars",
    },
    {
      title: "luther",
      thumbnail: "/src/assets/images/luther.jpg",
      musicUrl:
        "/src/assets/audio/Kendrick Lamar - luther (Official Audio).mp3",
      duration: "2:57",
      artistName: "Kendrick Lamar ",
    },
    {
      title: "blue ",
      thumbnail: "/src/assets/images/blue.jpg",
      musicUrl: "/src/assets/audio/blue.mp3",
      duration: "3:41",
      artistName: "yung kai ",
    },
    {
      title: "Father Ocean",
      thumbnail: "/src/assets/images/fatherocean.jpg",
      musicUrl: "/src/assets/audio/fatherocean.mp3",
      duration: "5:18",
      artistName: "Ben Böhmer Remix Edit",
    },
    {
      title: "After Hours",
      thumbnail: "/src/assets/images/afterhours.jpg",
      musicUrl: "/src/assets/audio/afterhours.mp3",
      duration: "6:01",
      artistName: "The Weeknd",
    },
  ];
  const [activeTab, setActiveTab] = useState("foryou");
  const [filtredData, setFiltredData] = useState(data);

  return (
    <AppContext.Provider
      value={{
        setActiveTab,
        activeTab,
        data,
        setFiltredData,
        filtredData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
