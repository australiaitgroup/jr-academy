import { breakpoints } from '@app/styles/variables';
import IProps from '@app/utils/interface';
import React from 'react';
import styled from 'styled-components';

const ResponsiveRow = styled(props => <div {...props} />).attrs(
	({ isMobile }: IProps) => ({
		mobileDisplay: isMobile ? 'flex' : 'none',
		normalDisplay: isMobile ? 'none' : 'flex'
	})
)`
	display: ${props => props.normalDisplay};
	@media (max-width: ${breakpoints.lg}px) {
		display: ${props => props.mobileDisplay};
	}
`;

export default ResponsiveRow;
