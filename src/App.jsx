import { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

function App() {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const [isCopied, setCopied] = useClipboard(transcript);
  const startListening =()=> SpeechRecognition.startListening({ continuous: true ,language:'en-IN'});
  const stopListening =()=> SpeechRecognition.stopListening();
  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className="container">
      <h1 className="title">Voice to Text Conversion</h1>
  
      <div className="main-content">
        {transcript}
      </div>

      <div className="button-group">
        <button className="btn-style" onClick={setCopied}>{isCopied ? "Copied!" : "Copy to clipboard"}</button>
        <button className="btn-style" onClick={startListening}>Start Listening</button>
        <button className="btn-style" onClick={stopListening}>Stop Listening</button>
      </div>
    </div>
  );
}

export default App;