import React, { useEffect, useRef, useState } from 'react';
import {HiSpeakerWave} from 'react-icons/hi2';

function AutoPlayAudio({audioUrl}) {

    const [color,setColor]=useState('bg-color');

const changeColor=()=>{
setColor('gray-600');
}
  const [audio] = useState(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isPlaying) {
        playAudio();
      }
    };

    // Play audio when the page becomes visible
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audio, isPlaying]);

  const handleReplayAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setColor('bg-color');
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
          setColor('gray-600')
        });
    }
  };

  return (
    <div className='flex justify-center items-center'>
      {isPlaying ? (
        <div className='flex justify-center items-center'>
          {/* <p>Audio is currently playing.</p> */}
          <button  className={`flex justify-center items-center text-bgcolor font-bold text-[30px] mx-4 cursor-pointer text-${color}`}  onClick={handleReplayAudio}>
            <HiSpeakerWave /> Replay
          </button>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          {/* <p>Audio will play automatically when the page is visible.</p> */}
          <button  className={` flex justify-center items-center text-bgcolor font-bold text-[30px] mx-4 cursor-pointer text-${color}`} onClick={handleReplayAudio}>
            <HiSpeakerWave /> Play
          </button>
        </div>
      )}
      {/* Use an empty audio element for reference */}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}

export default AutoPlayAudio;
