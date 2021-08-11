import { colors } from '@app/styles/variables';
import { Link as A } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Link = styled(props => <A {...props} />)`
	flex: 0 0 auto;
	display: inline-block;
	transition: opacity 0.2s, transform 0.2s;
	cursor: pointer;
	letter-spacing: 0.025rem;
	color: currentColor;
	text-decoration: none;
	z-index: inherit;
	&:hover,
	&:focus {
		opacity: 0.8;
		color: ${colors.hover};
	}
	&:active {
		transform: scale(0.95);
		opacity: 0.6;
	}
`;

export default Link;
