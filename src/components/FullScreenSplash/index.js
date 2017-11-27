import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';

const StyledSplash = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;    
width: 100%;
max-width: 1200px;
display: inherit;
margin-top:  15vh;
`;

class FullScreenSplash extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        isVisible: PropTypes.bool,
        altText: PropTypes.string,
        className: PropTypes.string,
        animationIn: PropTypes.string,
        animationOut: PropTypes.string
    }
    static defaultProps = {
        isVisible: true,
        altText: '',
        className: '',
        animationIn: 'bounceInDown',
        animationOut: 'bounceOutDown'
    }
    constructor(props) {
        super(props);
        this.delayState = this.delayState.bind(this);
    }
    componentDidMount() {
        this.delayState();
    }
    delayState() {
        setTimeout(() => {
            this.setState({
            isVisible: false
          })
        }, 200);
    }
    render() {
        const {
            isVisible,
            image,
            altText,
            className,
            animationIn,
            animationOut
        } = this.props
        return (
            <StyledSplash>
            <Animated animationIn={animationIn} animationOut={animationOut} isVisible={isVisible}>
                <div>
                    <img className={className} src = {image} alt={altText}/>
                </div>
            </Animated>
            </StyledSplash>
        )
    }
}

export default FullScreenSplash;
