import CircleDecor from '@app/images/background-shapes/circle-decor.inline.svg';
import GreenDots from '@app/images/background-shapes/green-dots.inline.svg';
import LeftQuotes from '@app/images/background-shapes/left-quotes.inline.svg';
import LightOrangeDots from '@app/images/background-shapes/light-orange-dots.inline.svg';
import RightQuotes from '@app/images/background-shapes/right-quotes.inline.svg';
import { breakpoints, colors, widths } from '@app/styles/variables';
import FixedImage from '@app/utils/fixed-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	position: relative;
	background: ${colors.gray.light};
	padding-bottom: 120px;
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
	${props => props.css};
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: ${props => 1.6 * props.top}px;
		margin-left: ${props => props.left}px;
	}
`;

const LeftShape = styled(props => <div {...props} />)`
	position: absolute;
	top: 100px;
	left: 0;
	max-width: ${widths.max}px;
	margin-top: ${props => props.top}px;
	margin-left: ${props => props.left}px;
	z-index: -1;
	@media (max-width: ${breakpoints.xl}px) {
	}
`;

const PatternFour = ({ children }) => (
	<Background>
		<LeftShape top={'-100'} left={'85'}>
			<LeftQuotes />
		</LeftShape>
		<RightShape top={'250'} right={'0'}>
			<CircleDecor />
		</RightShape>
		<RightShape
			top={'490'}
			right={'0'}
			css={'clip-path: polygon(0 0, 76% 0, 76% 80%, 0 80%); height: 100px; z-index: -2;'}
		>
			<LightOrangeDots />
		</RightShape>
		<RightShape top={'660'} right={'80'}>
			<RightQuotes />
		</RightShape>
		<LeftShape top={'720'} left={'105'} css={'transform: rotate(90deg);'}>
			<GreenDots />
		</LeftShape>
		<RightShape top={'1248'} right={'0'}>
			<FixedImage imgName='grey-rectangle.png' zoom={1.3} />
		</RightShape>
		<RightShape top={'1320'} right={'0'} css={'width: 100%'}>
			<FixedImage imgName='blue-rectangle.png' zoom={3.7} width='100%'/>
		</RightShape>
		{children}
	</Background>
);

PatternFour.propTypes = {
	children: PropTypes.node.isRequired
};

export default PatternFour;
