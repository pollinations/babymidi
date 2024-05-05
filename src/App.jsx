import { useState, useEffect } from 'react'
import babyMidiVideo from './assets/babymididisco.mp4' // Importing video file for Baby Midi
import babyMidiAudio from './assets/babymidi.mp3'; // Importing audio file for Baby Midi
import './App.css' // Importing CSS for styling

function App() {

  // Effect to handle video autoplay on iOS devices
  useEffect(() => {
    const videoElement = document.getElementById('babyMidiVideo'); // Accessing the video element by its ID
    if (videoElement) {
      videoElement.play(); // Playing the video if the element is found
    }
  }, []);

  /**
   * Calculates the age in weeks of Baby Midi since a specific start date.
   * @returns {number} The age in weeks.
   */
  const calculateAgeInWeeks = () => {
    const targetDate = new Date(2024, 4, 5); // Date when Baby Midi is exactly 24 weeks old (May 5, 2024)
    const currentDate = new Date(); // Getting the current date
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7; // Number of milliseconds in a week
    const weeksAtTarget = 24;
    const weeksSinceTarget = Math.floor((currentDate - targetDate) / millisecondsPerWeek);
    const ageInWeeks = weeksAtTarget + weeksSinceTarget; // Calculating the age in weeks
    return ageInWeeks;
  }

  const babyMidiAge = calculateAgeInWeeks(); // Storing the calculated age in weeks

  return (
    <>
      <h1 style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        Baby Midi - {babyMidiAge} weeks old
      </h1>
      <video id="babyMidiVideo" src={babyMidiVideo} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
        {/* Video of Baby Midi playing in the background */}
      </video>

      <audio controls loop style={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
        <source src={babyMidiAudio} type="audio/mp3" />
        Your browser does not support the audio element. {/* Fallback text for unsupported browsers */}
      </audio>
    </>
  )
}

export default App
