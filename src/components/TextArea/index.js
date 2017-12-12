import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Animated } from 'react-animated-css';
import styled from 'styled-components';

const StyledText = styled.div`
    color: #26c2eb;
    padding: 30px 60px;
`;

class TextArea extends Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string
    };
    static defaultProps = {
        title: 'Lorum Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate mauris lacus, id congue dui blandit pellentesque. Vestibulum eleifend est tellus, ac mollis risus vulputate ut. Sed ut velit ac dolor venenatis posuere. Vestibulum eu tellus leo. Morbi dapibus mauris a ante placerat vestibulum. Morbi eu nisi elit. Suspendisse ut augue ac ipsum vestibulum consequat. Phasellus auctor purus a turpis feugiat semper. Donec sagittis sapien eget pharetra vulputate. Maecenas sit amet laoreet ex. Duis vitae mi consectetur, lobortis ante a, scelerisque nisl. Proin ut posuere quam. Ut quis lacus non diam efficitur venenatis ac eu augue. Curabitur sed nisl in orci mattis feugiat quis eu sapien. Nulla eget malesuada felis. Suspendisse nec est faucibus, convallis nisl non, pellentesque lacus.'
    };
    render() {
        const {title, content} = this.props;
        return (
            <StyledText>
                <h2>{title}</h2>
                <p>{content}</p>
            </StyledText>

        )
    }
}

export default TextArea;