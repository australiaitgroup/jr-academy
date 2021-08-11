import Hamburger from '@app/images/icons/hamburger.inline.svg';
import { breakpoints } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 2em;
	padding: 1em;
`;

const ButtonContainer = styled.div`
	z-index: 2;
	@media (min-width: ${breakpoints.lg}px) {
		display: none;
	}
`;

const Button = styled.button`
	background-color: inherit;
	border: none;
	outline: none;
	color: black;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 2px 2px;
	padding: 2px 4px;
	cursor: pointer;
	border-radius: 4px;
`;

const BurgerButton = props => {
	const toggle = () => {
		props.toggle(!props.state);
	};

	return (
		<ButtonContainer>
			<Button onClick={toggle}>
				<Hamburger height='25px' width='25px' />
			</Button>
		</ButtonContainer>
	);
};

const Navbar = props => {
	const [isMobile, unfoldMobileNav] = useState(false);
	const { links } = props;

	return (
		<Wrapper>
			<Logo />
			<NavLinks links={links} isMobile={isMobile} />
			<BurgerButton toggle={unfoldMobileNav} state={isMobile} />
		</Wrapper>
	);
};

Navbar.propTypes = {
	links: PropTypes.string
};

Navbar.defaultProps = {
	links: ''
};

export default Navbar;
