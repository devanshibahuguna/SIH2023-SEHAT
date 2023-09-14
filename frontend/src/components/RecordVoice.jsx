import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorder = useRef(null);
  const audioStream = useRef(null);

  const startRecording = async () => {
    try {
      audioStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(audioStream.current);
      mediaRecorder.current.ondataavailable = handleDataAvailable;
      mediaRecorder.current.onstop = handleRecordingStop;
      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  const handleRecordingStop = () => {
    setIsRecording(false);
    if (audioStream.current) {
      audioStream.current.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div className="audio-recorder">
      {isRecording ? (
        <>
          <p className='mt-4'>Recording...</p>
          <Button className='bg-[#DEF0FF] px-8 py-2 rounded-lg mt-20' variant="danger" onClick={stopRecording}>
            Stop Recording
          </Button>
        </>
      ) : (
        <Button className='bg-[#DEF0FF] px-8 py-2 rounded-lg mt-20' variant="success" onClick={startRecording}>
          Start Recording
        </Button>
      )}
      {audioChunks.length > 0 && (
        <audio className='mt-8'controls>
          <source src={URL.createObjectURL(new Blob(audioChunks, { type: 'audio/wav' }))} />
        </audio>
      )}
    </div>
  );
}

export default AudioRecorder;