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
        animationOut: PropTypes.string,
        delayTime: PropTypes.number
    }
    static defaultProps = {
        isVisible: true,
        altText: '',
        className: '',
        animationIn: 'bounceInDown',
        animationOut: 'bounceOutDown',
        delayTime: 5000
    }
    constructor(props) {
        super(props);
        this.state = { isVisible: props.isVisible };
        this.delayState = this.delayState.bind(this);
    }
    componentDidMount() {
        this.delayState();
    }
    delayState() {
        const { delayTime } = this.props;
        let newState = this.state;
        setTimeout(() => {
            newState.isVisible = false
            console.log(newState.isVisible)
            this.setState(newState);
          }, delayTime);
    }
    render() {
        const {
            image,
            altText,
            className,
            animationIn,
            animationOut
        } = this.props;
        const { isVisible } = this.state;
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
