import { AudioPlayer } from 'react-audio-play';


const Player = () => {
  return (
    <div >
      {/* <h1>Quick Demo: An enduser Conversation with e-commerce agent</h1> */}
      <AudioPlayer src="https://unpkg.com/convai-widget-embed@1.6.0/audio/Waveify%20AI%20Chat2.m4a" />

      {/* <AudioPlayer className='custom-style' src="https://unpkg.com/convai-widget-embed@1.5.0/audio/sample.mp3" /> */}
    </div>
  );
};

export default Player;