import Navbar from '@app/components/Navbar';
import Styled from '@app/components/Styled-components';
import { colors } from '@app/styles/variables';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	margin: 0 auto;
	width: 100%;
	background-color: ${colors.gray.light};
`;

const Header = ({ menuLinks }) => (
	<HeaderWrapper>
		<Styled.Section>
			<Navbar links={menuLinks} />
		</Styled.Section>
	</HeaderWrapper>
);

Header.propTypes = {
	menuLinks: PropTypes.string
};

Header.defaultProps = {
	menuLinks: ''
};

export default Header;
