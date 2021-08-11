import { colors } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Box = styled(props => <div {...props} />)`
	height: ${props => props.height}px;
	width: ${props => props.width}px;
	margin: 14px auto;
	padding: 30px 10px;
	border-radius: 30px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: ${colors.white};
	border-style: solid;
	border-width: 1.5px;
	border-color: ${colors.white};
	h3 {
		color: ${colors.hover};
	}
	:hover {
		cursor: pointer;
		border: double 1.5px transparent;
		border-radius: 30px;
		background-image: linear-gradient(white, white),
			linear-gradient(to bottom, #2eccea, #65c7f7 45%, #0052d4);
		background-clip: padding-box, border-box;
	}
`;

const Card = ({ image, text, height, width }) => (
	<Box height={height} width={width}>
		{image}
		{text}
	</Box>
);

Card.propTypes = {
	text: PropTypes.object,
	image: PropTypes.object,
	height: PropTypes.number,
	width: PropTypes.number
};

Card.defaultProps = {
	text: {},
	image: {},
	height: 0,
	width: 0
};

export default Card;
