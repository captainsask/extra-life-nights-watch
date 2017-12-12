/* eslint-disable */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';
import Instafeed from 'react-instafeed';

const StyledInstagramGallery = styled.div`
    width: 100%;
`;

class InstagramGallery extends Component {
    static propTypes = {
        
    };
    static defaultProps = {

    };
    render() {
        return (
            <StyledInstagramGallery id='instafeed'>
                <Instafeed
                    limit='5'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target='instafeed'
                    template=''
                    userId='232601404'
                    clientId='efc045d7a99942828ca6b921651bbfe9'
                    accessToken='232601404.1677ed0.03f28b4307454ff6aa398297777b89c3'
                />
            </StyledInstagramGallery>
        )
    }
}

export default InstagramGallery;
/* eslint-enable */
