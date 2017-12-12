/* eslint-disable */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';
import Test_Image from '../../assets/20171104_190329-min.jpg';

const StyledCarousel = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    display: inline-block;
    position: relative;
`;

const StyleImage = styled.img`
    width: 100%;
    position: absolute;
    top: -30%;
`;

class Carousel extends Component {
    static propTypes = {
        image: PropTypes.string,
        classNames: PropTypes.string,
        altText: PropTypes.string
    };
    static defaultProps = {
        image: Test_Image,
        classNames: 'TESTING',
        altText: "MORE TEST"
    };
    render() {
        const { image, classNames, altText } = this.props;
        return (
            <StyledCarousel>
                <StyleImage className={classNames} src = {image} alt={altText}/>
            </StyledCarousel>
        )
    }
}

export default Carousel;
/* eslint-enable */
