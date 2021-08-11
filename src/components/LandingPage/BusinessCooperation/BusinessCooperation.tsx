import contentArray from '@app/components/contents/LandingPage/businessCooperation.json';
import Styled from '@app/components/Styled-components';
import background from '@app/images/background/business-cooperation-bg.svg';
import { breakpoints, colors } from '@app/styles/variables';
import { css } from '@emotion/core';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
	z-index: 2;
	h2 {
		color: ${colors.white};
	}
`;

const Background = ({ children }) => (
	<div
		css={css`
			background-image: url(${background});
			background-size: 100%;
			background-repeat: no-repeat;
			margin-top: -15px;
			padding: 160px 0 180px;
			@media (max-width: ${breakpoints.xl}px) {
				background-size: 150%;
				width: 500px;
				margin: auto;
				margin-top: -6px;
				padding: 80px;
			}
		`}
	>
		{children}
	</div>
);

const TableWrapper = styled.div`
	margin: 0 100px;
	margin-top: -8rem;
	background-color: ${colors.white};
	border-radius: 20px;
	box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
	@media (max-width: ${breakpoints.xl}px) {
		width: 400px;
		margin: auto;
		margin-top: -3rem;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: 1rem;
		grid-template-columns: 1fr;
		padding: 2rem 1rem;
	}
`;

const Column = styled.div`
	text-align: center;
	padding: 20px 0 30px;
	@media (max-width: ${breakpoints.xl}px) {
		padding: 0;
	}
`;

const Row = styled.div`
	width: 200px;
	margin: 1rem auto;
	p {
		margin: 8px 10px;
	}
`;

const SeparateLine = styled.div`
	margin: 1rem auto;
	padding: 0.5px 0;
	height: 1px;
	width: 60px;
	background-image: radial-gradient(circle at 50% 0, #5fe4c5, #2bc0e4);
`;

const BusinessCooperation = () => (
	<Styled.Section>
		<Wrapper>
			<Background>
				<Styled.Heading.Subtitle>
					Business Cooperation
				</Styled.Heading.Subtitle>
			</Background>
			<TableWrapper>
				<Grid>
					{contentArray.map((item, i) => (
						<Column key={i}>
							<Row>
								<Styled.Heading.H3>
									<strong>{item.title}</strong>
								</Styled.Heading.H3>
							</Row>
							<SeparateLine />
							<Row>
								<Styled.Text.P>{item.content}</Styled.Text.P>
							</Row>
						</Column>
					))}
				</Grid>
			</TableWrapper>
		</Wrapper>
	</Styled.Section>
);

export default BusinessCooperation;
