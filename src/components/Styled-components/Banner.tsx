import { breakpoints, colors } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Background = styled.div`
	background-color: ${colors.gray.light};
	clip-path: polygon(100% 0, 100% 84%, 50% 100%, 0 85%, 0 0);
`;

const ViewEffect = styled.div`
	height: 50px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 28px 40px;
	@media (max-width: ${breakpoints.lg}px) {
		flex-direction: column;
		text-align: center;
	}
`;

const Column = styled.div`
	padding: 1rem 2.45rem;
	display: block;
	p {
		margin: 8px 0;
	}
`;

const Banner = ({ text, image }) => (
	<Background>
		<Section>
			<Wrapper>
				<Column>{text}</Column>
				<Column>{image}</Column>
			</Wrapper>
		</Section>
		<ViewEffect />
	</Background>
);

Banner.propTypes = {
	text: PropTypes.object,
	image: PropTypes.object
};

Banner.defaultProps = {
	text: {},
	image: {}
};

export default Banner;
