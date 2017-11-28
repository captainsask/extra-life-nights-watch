import React, { Component } from 'react';
import ExtraLife_blue from '../../assets/ExtraLife_blue.png';
import FullScreenSplash from '../../components/FullScreenSplash';
import Header from '../../components/Header';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    background-color: #000000;
    height: 100%;
    width:  100%;
    position: absolute;
`;
class HomePage extends Component {
    render() {
        return(
            <StyledHomePage className='homepage-content'>
                <div className="big-start">
                    <FullScreenSplash image={ExtraLife_blue} animationOut='flipOutX' delayTime={2000} />
                </div>
                <div className='page-content'>
                    <div className='header-content'>
                        <Header animationIn='fadeIn' delayTime = {2000}/>
                    </div>
                </div>
            </StyledHomePage>
        )
    }
}

export default HomePage;