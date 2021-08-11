import CircleDecorTwo from '@app/images/background-shapes/circle-decor-two.inline.svg';
import OrangeDots from '@app/images/background-shapes/orange-dots.inline.svg';
import { breakpoints, colors, widths } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	position: relative;
	background: ${colors.gray.light};
	padding-bottom: 120px;
	z-index: 0;
	@media (max-width: ${breakpoints.xl}px) {
		padding-bottom: 80px;
	}
`;

const RightShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 76px;
	right: 85px;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-right: ${props => props.right}px;
	z-index: -1;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => 1.8 * props.top}px;
		margin-left: ${props => props.left / 1000}px;
		transform: rotate(90deg);
	}
`;

const LeftShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 40px;
	left: 0;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-left: ${props => props.left}px;
	z-index: -1;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => props.top / 100}px;
		margin-left: ${props => props.left}px;
	}
`;

const PatternTwo = ({ children }) => (
	<Background>
		<RightShape top={'390'} right={'100'}>
			<OrangeDots />
		</RightShape>
		<LeftShape top={'220'} left={'0'}>
			<CircleDecorTwo css={'transform: rotateX(180deg);'}/>
		</LeftShape>
		{children}
	</Background>
);

PatternTwo.propTypes = {
	children: PropTypes.node.isRequired
};

export default PatternTwo;
