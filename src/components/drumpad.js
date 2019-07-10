import React from"react"
import ShakerSound from '../assets/Shaker.wav'
import KickSound from '../assets/Kick.wav'
import HiHatSound from '../assets/HiHat.wav'
import TomSound from '../assets/Tom.wav'
import SnareSound from '../assets/SnareSound.wav'
import WOW from '../assets/808hconga.wav'
import CrashSound from '../assets/Crash.wav'
import ClapSound from'../assets/Clap02.wav'
import "./pages/drumpad.css"

const DrumPad1 = ({ drumKey, song,handleClick,url }) => {
    return (
        <button className="drum-pad" id={song} onClick={handleClick(drumKey,song)}>
            {song}<br/>
            {drumKey}
            <audio className="clip" src={url} id={drumKey}/>
        </button>
    );
};
const DrumPad2 = ({ drumKey, song,handleClick,url }) => {
    return (
        <button className="drum-pad" id={song} onClick={handleClick(drumKey,song)}>
            {song}<br/>
            {drumKey}
            <audio className="clip" src={url} id={drumKey}/>
        </button>
    );
};

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drumPads1: [
                {
                    "key": "Q",
                    "song": "shaker",
                    "url": ShakerSound
                },
                {
                    "key": "W",
                    "song": "Kick",
                    "url": KickSound
                },
                {
                    "key": "E",
                    "song": "Hi-Hat",
                    "url": HiHatSound
                },
                {
                    "key": "R",
                    "song": "Tom",
                    "url": TomSound
                }]
            ,drumPads2:[
                {
                    "key": "A",
                    "song": "Snare",
                    "url": SnareSound
                },
                {
                    "key": "S",
                    "song": "808",
                    "url": WOW
                },
                {
                    "key": "D",
                    "song": "Clap",
                    "url": ClapSound
                },
                {
                    "key": "F",
                    "song": "Crash",
                    "url": CrashSound
                }
                
            ],
           
            currentSongText: '',
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlekeyPress = this.handlekeyPress.bind(this);
    }
    componentDidMount() {
        // will click the button when the corresponding key pressed
        window.addEventListener('keypress', this.handleKeyPress);
        window.addEventListener('keypress', this.handlekeyPress);
    }
    // handler for the click button on the DrumPad Component
    handleButtonClick(key, song) {
        return () => {
            document.getElementById(key).play();
            this.setState({
                currentSongText: song,
            });
        };
    }

    render() {
        return (
            <div id="drum-machine">
                <div className="app_title">
                    <h1>Drum Pad</h1>
                </div>
                <div className="display-container">
                    <div id="display-pads">
                        {this.state.drumPads1.map(item => (
                            <DrumPad1
                                song={item.song}
                                key={item.key}
                                drumKey={item.key}
                                handleClick={this.handleButtonClick}
                                url={item.url}
                            />
                        ))}
                    </div>
                    <div id="display-pads">
                        {this.state.drumPads2.map(item => (
                            <DrumPad2
                                song={item.song}
                                key={item.key}
                                drumKey={item.key}
                                handleClick={this.handleButtonClick}
                                url={item.url}
                            />
                        ))}

                    </div>
                    <p id="display" className="current-text">{this.state.currentSongText}</p>
                </div>
            </div>
        );
    }
    //

    handleKeyPress(e) {
        const pad1 = this.state.drumPads1.find(
            item => item.key === e.key.toUpperCase(),
        );
        
        // click the button
        if (pad1) document.getElementById(pad1.song).click();
    }
    handlekeyPress(e){
        const pad2 = this.state.drumPads2.find(
            item => item.key === e.key.toUpperCase(),
        );
        if (pad2) document.getElementById(pad2.song).click();
    }
}

export default DrumMachine
