import React from 'react'
import keyboard from './keyboard.svg'
import downArrow from './down-arrow.svg'
import './App.css'
import './fonts/SourceSansPro-Regular.otf'
import './fonts/SourceSansPro-Bold.otf'
import Iframe from 'react-iframe'
import About from './About.js'
import ReactDOM from 'react-dom';
import Countdown, { calcTimeDelta } from 'react-countdown';

function App() {
  // fetch('http://localhost:5000')
  // .then((response) => {
  //   return response.json()
  // })
  // .then((data) => {
  //   console.log(data)
  // })

  function handleJoinClick() {
    window.location.href = 'https://airtable.com/shrAnJnjEMZOCDtQj'
  }

  function handleKeyboardClick() {
    ReactDOM.render(<About />, document.getElementById('root'))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="keyboard" onClick={handleKeyboardClick}>
          <img src={keyboard} alt="logo" />
        </div>

        <h2 className="hack-anywhere">hack_anywhere</h2>

        <div className="headline">
          <h1>A fully <b>remote hackathon</b></h1>
          <h3><b>></b> &nbsp;Living in quarantine from the COVID-19 virus? Hack alongside others, virtually.</h3>
        </div>

        <div className="hackathon-1">
          <div>Hackathon #1</div>
          <div>
            <b>></b> &nbsp;QUARANTINED<br />
            <b>></b> &nbsp;starts <b>Saturday 3-21-2020</b> @ 9am PST
          </div>
        </div>

        <div className="countdown"><Countdown date={Date.now() + calcTimeDelta(new Date(2020, 2, 21, 9, 0, 0, 0), Date.now()).total} /></div>

        <button className="join-button" onClick={handleJoinClick}>
          START HACKING
        </button>

        <div className="how-it-works">
          <div className="shell-command">> &nbsp;./how-it-works.sh</div>
          <div>1. Find an idea to work on</div>
          <div>2. Tell us about yourself</div>
          <div>3. Receive invite to assigned Discord channel</div>
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
          <div>artists</div>
          <div>musicians</div>
        </div>

        <div className="ideas-arrow">
          <div>ideas submitted</div>
          <img src={downArrow} alt="scroll down" />
        </div>
      </header>

      <div className="ideas">
        <Iframe url="https://airtable.com/embed/shr9bIpkZkEtyD7ha?backgroundColor=purple&layout=card&viewControls=on"
          className="ideas-table"/>
      </div>
    </div>
  );
}

export default App;
