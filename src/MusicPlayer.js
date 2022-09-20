import React from "react";
import useMusicPlayer from "./hooks/useMusicPlayer";

function MusicPlayer() {
  const {
    currentTrackName,
    isPlaying,
    playNextTrack,
    playPreviousTrack,
    togglePlay,
  } = useMusicPlayer();

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-2 bg-red-light"></div>
        <div className="w-full flex items-center justify-center h-screen bg-red-lightest">
          <div className="bg-red-300 shadow-lg rounded-lg p-6">
            <div className="flex">
              <div className="w-full flex flex-col justify-evenly items-start  flex-nowrap 	">
                <TrackList />
              </div>
              <div className=" p-8">
                <div className=" w-64 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-grey-darkest font-medium whitespace-nowrap flex flex-nowrap">
                      {currentTrackName.split("-")[0]}
                    </h3>
                    <p className="text-2x1 font-medium text-grey mt-1">
                      {currentTrackName.split("-")[1]}
                    </p>
                  </div>
                </div>
                <div className=" w-64 flex justify-between items-center mt-8">
                  <div className="text-grey-darker">
                    <svg
                      // backwards button
                      className="w-8 h-8 hover:bg-purple-500"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      onClick={playPreviousTrack}
                    >
                      <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                    </svg>
                  </div>
                  <div
                    className="text-white p-8 rounded-full bg-red-light shadow-lg  hover:bg-purple-500"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <svg
                        // play Button
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                      </svg>
                    ) : (
                      <svg
                        // pause button
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="text-grey-darker hover:bg-purple-500">
                    <svg
                      // forward buttons
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      onClick={playNextTrack}
                    >
                      <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-8 py-4">
              <div className="mt-1">
                <div className="h-1 bg-grey-dark rounded-full">
                  <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                    <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;

const TrackList = () => {
  const { trackList, playTrack } = useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <button
          className="text-lg text-grey-darkest font-medium text-left whitespace-nowrap hover:bg-pink-500"
          key={index}
          onClick={() => {
            playTrack(index);
          }}
        >
          <p>{track.name}</p>
        </button>
      ))}
    </>
  );
};
