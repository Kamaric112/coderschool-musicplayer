import React, { useState } from "react";
import Track1 from "./electronic-future-beats-117997.mp3";
import Track2 from "./leonell-cassio-the-blackest-bouquet-118766.mp3";
import Track3 from "./tuesday-glitch-soft-hip-hop-118327.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Electronic Future Beats - QubeSounds",
      file: Track1,
    },
    {
      name: "Leonell Cassio - The Blackes Bouquet",
      file: Track2,
    },
    {
      name: "Tuesday Glitch Soft Hip Hop - amaksi",
      file: Track3,
    },
  ],
  currentTrackIndex: 1,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
