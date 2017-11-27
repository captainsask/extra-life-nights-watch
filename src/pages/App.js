import React, { Component } from 'react';
import ExtraLife_blue from '../assets/ExtraLife_blue.png';
import {Animated} from 'react-animated-css';
import styled from 'styled-components';

const BigStartImage = ({className}) => {
    return (
        <Animated animationIn='bounceInUp' animationOut='bounceOutDown' isVisible={true}>
            <div>
                <img className={className} src = {ExtraLife_blue} alt='Extra Life'/>
            </div>
        </Animated>
    )
}
const StyledBigStart = styled(BigStartImage)`
    position: relative;
    margin-left: auto;
    margin-right: auto;    
    width: 100%;
    max-width: 1200px;
    display: inherit;
    margin-top:  15vh;
`;

class App extends Component {
    render() {
        return (
            <div className="big-start">
                <StyledBigStart />
            </div>
        )
    }
}

export default App;
