import { useEffect, useRef, useState } from "react";
import { Pause, Play, X } from "lucide-react";

const trackFileName = "background.mp3";
const trackSource = `${import.meta.env.BASE_URL}music/${encodeURIComponent(trackFileName)}`;

interface AudioPlayerProps {
  onClose: () => void;
}

export default function AudioPlayer({ onClose }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playRequestRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function startPlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    const requestId = ++playRequestRef.current;
    setErrorMessage("");
    void audio
      .play()
      .then(() => {
        if (requestId === playRequestRef.current) setIsPlaying(true);
      })
      .catch((error: unknown) => {
        if (requestId !== playRequestRef.current) return;
        setIsPlaying(false);
        setErrorMessage(
          error instanceof DOMException && error.name === "NotAllowedError"
            ? "Your browser blocked autoplay. Press Play to start the music."
            : "The music could not be played. Check the track file or try Play again.",
        );
      });
  }

  useEffect(
    () => {
      startPlayback();
      return () => {
        playRequestRef.current += 1;
        audioRef.current?.pause();
      };
    },
    [],
  );

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      startPlayback();
    } else {
      playRequestRef.current += 1;
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <aside className="audio-player" aria-label="Optional background music player">
      <audio
        ref={audioRef}
        src={trackSource}
        loop
        preload="none"
        onError={() => {
          setIsPlaying(false);
          setErrorMessage("This browser could not decode the music file in public/music.");
        }}
      />
      <div className="audio-player__copy">
        <span className="audio-player__eyebrow">A soundtrack, if you like</span>
        <span className="audio-player__track">I’d like to watch you sleeping · Sal Priadi</span>
      </div>
      <button
        className="audio-player__button"
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
      </button>
      <button className="audio-player__close" type="button" onClick={onClose} aria-label="Close music player">
        <X size={15} />
      </button>
      {errorMessage && (
        <span className="audio-player__error" role="status">
          {errorMessage}
        </span>
      )}
    </aside>
  );
}
