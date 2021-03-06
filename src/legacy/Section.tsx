import PropTypes from 'prop-types';
import React from 'react';
import Slide from 'react-reveal/Slide';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import styled from 'styled-components';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
	min-height: 50vh;
	min-width: 320px;
	max-width: 1366px;
	display: flex;
	margin: auto;
	flex: 0 1 auto;
	flex-direction: column;
	justify-content: center;
	padding: 5em 1em;
	scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

const Container = ({ id, children, Background = DefaultBackground }) => (
	<Section id={id} style={{ position: 'relative' }}>
		<Background />
		<SectionContainer>{children}</SectionContainer>
	</Section>
);

Container.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	Background: PropTypes.func
};

const Header = ({ name, icon = '', label = '' }) => (
	<Slide left>
		<Heading color="secondaryDark" mb={4}>
			<LinkAnimated>
				{name}
				{icon && (
					<span
						role="img"
						aria-label={label}
						style={{ marginLeft: '10px' }}
					>
						{icon}
					</span>
				)}
			</LinkAnimated>
		</Heading>
	</Slide>
);

Header.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string,
	label: PropTypes.string
};

export default {
	Container,
	Header
};
