import { AudioPlayer } from 'react-audio-play';
import '../styles/style.css';

const Player = () => {
  return (
    <div >
      <h1 className='custom-style'>Quick Demo:</h1>
      <AudioPlayer src="https://unpkg.com/convai-widget-embed@1.6.0/audio/Waveify%20AI%20Chat2.m4a" />

      {/* <AudioPlayer className='custom-style' src="https://unpkg.com/convai-widget-embed@1.5.0/audio/sample.mp3" /> */}
    </div>
  );
};

export default Player;