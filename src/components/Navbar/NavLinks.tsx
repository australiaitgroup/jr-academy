import Styled from '@app/components/Styled-components';
import { breakpoints, colors } from '@app/styles/variables';
import IProps from '@app/utils/interface';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavLinks = props => {
	const { links, isMobile } = props;
	const IResponsiveProps = {
		isMobile
	};
	const Links = () =>
		links.map((item: { name: string; link: string }) => (
			<NavItems key={item.name}>
				<Styled.Link to={item.link}>
					<strong>{item.name}</strong>
				</Styled.Link>
			</NavItems>
		));

	return (
		<Wrapper {...IResponsiveProps}>
			<Links />
		</Wrapper>
	);
};

const Wrapper = styled.ul.attrs(({ isMobile }: IProps) => ({
	visibility: isMobile ? 'visible' : 'hidden',
	transform: isMobile ? 'translateX(0%)' : 'translateX(100%)'
}))`
	list-style-type: none;
	margin: 0;
	padding: 0;
	z-index: 1;
	/* Medium devices (tablets, less than 992px) */
	@media (max-width: ${breakpoints.lg}px) {
		visibility: ${props => props.visibility};
		transform: ${props => props.transform};
		font-size: 1.5rem;
		width: 160px;
		padding-top: 8rem;
		position: absolute;
		top: 0;
		right: 0;
		font-size: 16px;
		background-color: ${colors.gray.calm};
		text-align: left;
		color: ${colors.black};
		height: 33%;
		li {
			display: block;
			margin-left: 5px;
			margin-right: 3rem;
			margin-bottom: 2rem;
			text-align: right;
			color: ${colors.white};
		}
	}
`;

const NavItems = styled.li`
	display: inline-block;
	margin-left: 30px;
`;

NavLinks.propTypes = {
	links: PropTypes.string,
	isMobile: PropTypes.bool
};

NavLinks.defaultProps = {
	links: '',
	isMobile: false
};

export default NavLinks;
