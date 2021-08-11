import BlueRectangle from '@app/images/background-shapes/blue-rectangle.inline.svg';
import LightOrangeDots from '@app/images/background-shapes/light-orange-dots.inline.svg';
import { breakpoints, colors, widths } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	position: relative;
	background: ${colors.gray.light};
	padding-bottom: 50px;
	@media (max-width: ${breakpoints.xl}px) {
		padding-bottom: 80px;
	}
	z-index: 0;
`;

const RightShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 100px;
	right: 0;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-right: ${props => props.right}px;
	z-index: -1;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => 1.2 * props.top}px;
		margin-left: ${props => props.left / 1000}px;
	}
`;

const LeftShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 100px;
	left: 84px;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-left: ${props => props.left}px;
	z-index: -1;
	@media (max-width: ${breakpoints.xl}px) {
	}
`;

const PatternOne = ({ children }) => (
	<Background>
		<RightShape top={'200'} right={'20'}>
			<BlueRectangle />
		</RightShape>
		<LeftShape top={'130'} left={'20'}>
			<LightOrangeDots />
		</LeftShape>
		{children}
	</Background>
);

PatternOne.propTypes = {
	children: PropTypes.node.isRequired
};

export default PatternOne;
