import IconNameArrary from '@app/components/contents/LandingPage/ourPartners.json';
import { breakpoints, colors } from '@app/styles/variables';
import FluidImage from '@app/utils/fluid-image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 0 30px;
	padding: 40px 0;
	margin-top: 20px;
	background-color: ${colors.white};
	border-radius: 20px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
	@media (max-width: ${breakpoints.xl}px) {
		width: 300px;
		padding: 25px 20px;
	}
`;

const Flex = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	@media (max-width: ${breakpoints.xl}px) {
		width: 300px;
		height: 350px;
	}
`;

const Box = styled.div`
	box-sizing: border-box;
	background-color: white;
	width: 60px;
	margin: 10px 20px;
	@media (max-width: ${breakpoints.xl}px) {
		margin: 10px;
	}
`;

const OurTutorsFrom = () => (
	<Wrapper>
		<Flex>
			{IconNameArrary.map((item, i) => (
				<Box>
					<FluidImage imgName={item.filename} />
				</Box>
			))}
		</Flex>
	</Wrapper>
);

export default OurTutorsFrom;
