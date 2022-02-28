
import './App.css';
import React from 'react';


 let sounds = {
  q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  w: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  e: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  x: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  c: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
}


let SoundsArr = Object.values(sounds);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: '',
    }
  }
  
  handleKeyDown = (e) => {
    if(e.key ==='q' || e.key === 'Q'){
      let audio = new Audio(SoundsArr[0])
      audio.play()
      this.setState({
        display: 'Heater-1'
      });
    }else if(e.key === 'w' || e.key === 'W'){
      let audio = new Audio(SoundsArr[1])
      audio.play()
      this.setState({
        display: 'Heater-2'
      })
    }else if(e.key === 'e' || e.kay === 'E'){
      let audio = new Audio(SoundsArr[2])
      audio.play()
      this.setState({
        display: 'Heater-3'
      })
    }else if(e.key === 'a' || e.kay === 'A'){
      let audio = new Audio(SoundsArr[3])
      audio.play()
      this.setState({
        display: 'Heater-4'
      }) 
    }
    else if(e.key === 's' || e.kay === 'S'){
      let audio = new Audio(SoundsArr[4])
      audio.play()
      this.setState({
        display: 'Clap'
      }) 
    }
   else if(e.key === 'd' || e.kay === 'D'){
      let audio = new Audio(SoundsArr[5])
      audio.play()
      this.setState({
        display: 'Open-HH'
      }) 
    } else if(e.key === 'z' || e.kay === 'Z'){
      let audio = new Audio(SoundsArr[6])
      audio.play()
      this.setState({
        display: "Kick-n'-hat"
      }) 
    }else if(e.key === 'x' || e.kay === 'X'){
      let audio = new Audio(SoundsArr[7])
      audio.play()
      this.setState({
        display: 'Kick'
      }) 
    }else if(e.key === 'c' || e.kay === 'C'){
      let audio = new Audio(SoundsArr[8])
      audio.play()
      this.setState({
        display: 'Closed-HH'
      }) 
    } else {
      let audio = new Audio()
      audio.play()
      this.setState({
        display: ''
      })
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown)
  }

render(){
  return(
    <div id="app">
      <div id="drum-machine">
        <h1>Drum machine</h1>
      <div id='display'>
        <div>
        <button  onClick={() => {
          let audio = new Audio(SoundsArr[0])
          audio.play()
          this.setState({
            display: 'Heater-1'
          })
        }} className='drum-pad' id="Heater-1">
          <audio class="clip" id="Q" >
            <source class="clip" id="Q" type="audio/mpeg" 
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></source>
          </audio>
          Q
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[1])
          audio.play()
          this.setState({
            display: 'Heater-2'
          });
        }} className='drum-pad' id="Heater-2">
        <audio class="clip" id="W" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        W
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[2])
          audio.play()
          this.setState({
            display: 'Heater-3'
          });
        }} className='drum-pad' id="Heater-3">
        <audio class="clip" id="E"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        E
        </button>
        </div>
        <div>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[3])
          audio.play()
          this.setState({
            display: 'Heater-4'
          });
        }} className='drum-pad' id="Heater-4">
        <audio class="clip" id="A" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        A
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[4])
          audio.play()
          this.setState({
            display: 'Clap'
          });
          }} className='drum-pad' id="Clap">
        <audio class="clip" id="S" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        S
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[5])
          audio.play()
          this.setState({
            display: 'Open-HH'
          });
        } } className='drum-pad' id="Open-HH">
        <audio class="clip" id="D" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        D
        </button>
        </div>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[6])
          audio.play()
          this.setState({
            display: "Kick-n'-Hat"
          })
          }} className='drum-pad' id="Kick-n'-Hat">
        <audio class="clip" id="Z" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        Z
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[7])
          audio.play()
          this.setState({
            display: 'Kick'
          })
          }} className='drum-pad' id="Kick">
        <audio class="clip" id="X" 
        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        X
        </button>
        <button onClick={() => {
          let audio = new Audio(SoundsArr[8])
          audio.play()
          this.setState({
            display: 'Closed-HH'
          });
          }} className='drum-pad' id="Closed-HH">
        <audio class="clip" id="C" 
        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        C
        </button>
        <div id="name">
          {this.state.display}
        </div>
      </div>
      </div>
    </div>
  )
}
}