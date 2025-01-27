import React from "react";
import './App.css'; // Import custom CSS

function App() {
  return (
    <div className="container">
      {/* Video Section */}
      <div className="video-container">
        <h2 className="title">嗚</h2>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kp9YVbAS4g4?si=eK3ZWI4AGPb6mzmr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <button
          className="watch-button"
          onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
        >
          Watch on YouTube
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Ethan's Video Website
      </footer>
    </div>
  );
}

export default App;
