// src/About.js
import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <h1 className="mb-4" align="center">About Text Tools</h1>

      <div className="row">
        {/* Left side main info */}
        <div className="col-md-8">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">What is Text Tools?</h3>
              <p className="card-text">
                Text Tools is a simple React-based web app that helps you
                quickly format and analyze your text. You can change the case of
                your text, remove extra spaces, copy it with one click and see a
                quick summary of your content.
              </p>
              <p className="card-text">
                This project is designed for learning React concepts like
                components, props, state, and routing using{" "}
                <strong>react-router</strong>.
              </p>
            </div>
          </div>

          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Features</h3>
              <ul className="mb-0">
                <li>Convert text to UPPERCASE and lowercase</li>
                <li>Remove extra spaces from text</li>
                <li>Copy cleaned text in one click</li>
                <li>Live word and character count</li>
                <li>Estimated reading time</li>
                <li>Light / Dark mode support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side small info card */}
        <div className="col-md-4">
          <div className="card mb-3 border-0 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Why I built this?</h4>
              <p className="card-text">
                This app is created to practice React JS, routing, Bootstrap
                styling and to build a useful small tool that can be used in
                daily text editing tasks.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Tech Stack</h4>
              <ul className="mb-0">
                <li>React JS</li>
                <li>React Router</li>
                <li>Bootstrap / custom CSS</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      <p className="container mt-4 mb-0"align="center">
        Made with ❤️ using React. Keep experimenting & keep learning!
      </p>
    </div>
  );
}
