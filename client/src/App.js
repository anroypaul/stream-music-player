import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

//const API_STREAM_LINK = "http://air.aristocrats.fm:8000/live2";
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://aristocrats-music-player.herokuapp.com/";

function App() {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/current-track`).then((response) => {
      setCurrentTrack(response.data.Playlist);
    });
  }, []);

  const audioRef = useRef();

  const onVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = volume;
  };

  const onBtnClickPlay = () => {
    const audio = audioRef.current;
    audio.volume = volume;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrentDuration = (e) => {
    const time = e.currentTarget.currentTime;
    setCurrentTime(time.toFixed(2));
  };

  const secondsToHms = (seconds) => {
    if (!seconds) return "00:00";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`;
    } else if (min === 0) {
      return `00:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "auto",
            boxShadow: "4px 3px 8px 1px #969696",
          }}
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig14.deviantart.net%2F5162%2Ff%2F2014%2F153%2F9%2Fe%2Fno_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg&f=1&nofb=1"
            className="card-img-top"
            alt="..."
          />
          <a className="dot" title="Play/Pause" onClick={onBtnClickPlay}>
            {!isPlaying ? "▶" : "❚❚"}
          </a>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="slide-container">
                <input
                  type="range"
                  name="volume"
                  className="slider"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={onVolumeChange}
                />
              </div>
            </li>
            <li className="list-group-item">{secondsToHms(currentTime)}</li>
          </ul>
          <div className="card-body">
            <audio
              ref={audioRef}
              onTimeUpdate={getCurrentDuration}
              src={`${API_URL}/audio-stream`}
            ></audio>
            <p className="card-text" style={{ fontWeight: "600", margin: 0 }}>
              {currentTrack.song?.title}
            </p>
            <p className="card-text" style={{ margin: 0 }}>
              {currentTrack.artist?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
