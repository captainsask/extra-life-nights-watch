import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';

const StyledHeader = styled.div`
    height: 25%;
    position: absolute;
    background-color: red;
    width: 100%;
    display: inline-block;
`;

class Header extends Component {
    static propTypes = {
        animationIn: PropTypes.string,
        isVisible: PropTypes.bool,
        delayTime: PropTypes.number
    };
    static defaultProps = {
        animationIn: 'fadeIn',
        isVisible: false,
        delayTime: 5000
    };
    constructor (props) {
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
            newState.isVisible = true
            this.setState(newState);
          }, delayTime);
    }
    render() {
        const { animationIn } = this.props;
        const { isVisible } = this.state;
        return (
            <Animated animationIn = { animationIn } isVisible = { isVisible }>
                <StyledHeader>
                    <h1>HEADER</h1>
                </StyledHeader>
            </Animated>        
        )
    }
}

export default Header;