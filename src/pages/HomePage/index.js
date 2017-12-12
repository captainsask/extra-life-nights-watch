import React, { Component } from 'react';
import ExtraLife_blue from '../../assets/ExtraLife_blue.png';
import FullScreenSplash from '../../components/FullScreenSplash';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import styled from 'styled-components';
import TextArea from '../../components/TextArea';

const StyledHomePage = styled.body`
    background-color: #000000;
    margin:  0;
    height: 100%;
    width:  100%;
    /* position: absolute; */
`;

const StyledSplash = styled.div`
    width: 100%;
    position:relative;
`;

const CarouselContent = styled.div`
    height:40%;
    display: block;
`;

const TextContent = styled.div`
    display: inline-block;
`;
class HomePage extends Component {
    render() {
        return(
            <StyledHomePage className='homepage-content'>
                <StyledSplash className="big-start">
                    <FullScreenSplash image={ExtraLife_blue} animationOut='flipOutX' delayTime={2000} />
                </StyledSplash>
                <div className='page-content'>
                    <div className='header-content'>
                        <Header animationIn='fadeIn' delayTime = {2000}/>
                    </div>
                    <CarouselContent className='carousel-content'>
                        <Carousel />
                    </CarouselContent>
                    <TextContent>
                        <TextArea />
                    </TextContent>
                </div>
            </StyledHomePage>
        )
    }
}

export default HomePage;