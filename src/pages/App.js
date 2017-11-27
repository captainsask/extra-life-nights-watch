import React, { Component } from 'react';
import ExtraLife_blue from '../assets/ExtraLife_blue.png';
import FullScreenSplash from '../components/FullScreenSplash'



class App extends Component {
    render() {
        return (
            <div className="big-start">
                <FullScreenSplash image={ExtraLife_blue} animationOut='flipOutX' delayTime={2000} />
            </div>
        )
    }
}

export default App;
