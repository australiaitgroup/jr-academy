import BlueDots from '@app/images/background-shapes/blue-dots.inline.svg';
import CircleDecor from '@app/images/background-shapes/circle-decor.inline.svg';
import GreenDots from '@app/images/background-shapes/green-dots.inline.svg';
import { breakpoints, colors, widths } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	position: relative;
	background: ${colors.white}; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		${colors.white} 0%,
		${colors.white} 50%,
		${colors.gray.light} 50%,
		${colors.gray.light} 100%
	); /* FF3.6+ */
	background: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(0%, ${colors.white}),
		color-stop(50%, ${colors.white}),
		color-stop(50%, ${colors.gray.light}),
		color-stop(100%, ${colors.gray.light})
	); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(
		top,
		${colors.white} 0%,
		${colors.white} 50%,
		${colors.gray.light} 50%,
		${colors.gray.light} 100%
	); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(
		top,
		${colors.white} 0%,
		${colors.white} 50%,
		${colors.gray.light} 50%,
		${colors.gray.light} 100%
	); /* Opera11.10+ */
	background: -ms-linear-gradient(
		top,
		${colors.white} 0%,
		${colors.white} 50%,
		${colors.gray.light} 50%,
		${colors.gray.light} 100%
	); /* IE10+ */
	background: linear-gradient(
		top,
		${colors.white} 0%,
		${colors.white} 50%,
		${colors.gray.light} 50%,
		${colors.gray.light} 100%
	); /* W3C */
	* {
		z-index: 1;
	}
`;

const RightShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 100px;
	right: 0;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-right: ${props => props.right}px;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => 1.5 * props.top}px;
		margin-right: ${props => 3 * props.right}px;
	}
`;

const LeftShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 78px;
	left: 0;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-left: ${props => props.left}px;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => 3 * props.top}px;
		margin-left: ${props => 3 * props.left}px;
	}
`;

const PatternOne = ({ children }) => (
	<Background>
		<RightShape top={'-30'} right={'46'}>
			<BlueDots />
		</RightShape>
		<RightShape top={'560'} right={'0'}>
			<CircleDecor />
		</RightShape>
		<LeftShape top={'748'} left={'50'}>
			<GreenDots />
		</LeftShape>
		{children}
	</Background>
);

PatternOne.propTypes = {
	children: PropTypes.node.isRequired
};

export default PatternOne;
