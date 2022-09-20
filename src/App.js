import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import MusicPlayer from "./MusicPlayer";
function App() {
  return (
    <MusicPlayerProvider>
      <MusicPlayer />
    </MusicPlayerProvider>
  );
}

export default App;
