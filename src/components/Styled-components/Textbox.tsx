import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Border = styled(props => <div {...props} />)`
	margin: 1rem auto;
	padding: auto;
	padding-left: 1rem;
	padding-right: 1rem;
	height: ${props => props.height}px;
	width: ${props => props.width}px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: double ${props => props.borderWidth}px transparent;
	border-radius: 10px;
	background-image: linear-gradient(white, white),
		linear-gradient(to bottom, #5fe4c5, #2bc0e4);
	background-clip: padding-box, border-box;
`;

const Textbox = ({ text, borderWidth, height, width }) => (
	<Border borderWidth={borderWidth} height={height} width={width}>
		{text}
	</Border>
);

Textbox.propTypes = {
	text: PropTypes.object,
	borderWidth: PropTypes.number,
	height: PropTypes.number,
	width: PropTypes.number
};

Textbox.defaultProps = {
	text: {},
	borderWidth: 0,
	height: 0,
	width: 0
};

export default Textbox;
