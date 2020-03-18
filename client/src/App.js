import React from 'react'
import keyboard from './keyboard.svg'
import downArrow from './down-arrow.svg'
import './App.css'
import './fonts/SourceSansPro-Regular.otf'
import './fonts/SourceSansPro-Bold.otf'

function App() {
  fetch('http://localhost:5000')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })

  function handleJoinClick() {
    window.location.href = 'https://airtable.com/shrAnJnjEMZOCDtQj'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="keyboard">
          <img src={keyboard} alt="logo" />
        </div>

        <h2 className="hack-anywhere">hack_anywhere</h2>

        <div className="headline">
          <h1>A fully <b>remote hackathon</b></h1>
          <h3><b>></b> &nbsp;Work on ideas to combat the COVID-19 virus while you’re quarantined.</h3>
        </div>

        <div className="hackathon-1">
          <div>Hackathon #1</div>
          <div>
            <b>></b> &nbsp;Hack while quarantined<br />
            <b>></b> &nbsp;starts <b>Saturday 3-21-2020</b> @ 10am PST
          </div>
        </div>

        <button className="join-button" onClick={handleJoinClick}>
          JOIN THE FIGHT
        </button>

        <div className="how-it-works">
          <div className="shell-command">> &nbsp;./how-it-works.sh</div>
          <div>1. Select (or create) an idea to work on</div>
          <div>2. Share a little about yourself</div>
          <div>3. Get invited to your assigned Discord channel</div>
        </div>

        <div className="who-we-are">
          <div className="shell-command">> &nbsp;./who-we-are.sh</div>
          <div>engineers</div>
          <div>designers</div>
          <div>data scientists</div>
          <div>product managers</div>
          <div>animators</div>
          <div>writers</div>
          <div>hackers</div>
          <div>video editors</div>
          <div>artist</div>
          <div>musicians</div>
        </div>

        <div className="ideas-arrow">
          <div>ideas submitted</div>
          <img src={downArrow} alt="scroll down" />
        </div>
      </header>

      idea content here...
    </div>
  );
}

export default App;
