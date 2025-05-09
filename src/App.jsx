import { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useClipboard } from "use-clipboard-copy";

function App() {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const clipboard = useClipboard();
  const [copied , setCopied] = useState(false);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const stopListening = () => SpeechRecognition.stopListening();
  const handleCopy = () => {
    clipboard.copy(transcript);
    setCopied(true);
  }

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Voice to Text Conversion</h1>

      <div className="main-content">
        {transcript}
      </div>

      <div className="button-group">
        <button className="btn-style" onClick={handleCopy}>{copied ? "Copied" : "Copy to Clipboard"}</button>
        <button className="btn-style" onClick={startListening}>Start Listening</button>
        <button className="btn-style" onClick={stopListening}>Stop Listening</button>
      </div>
    </div>
  );
}

export default App;

