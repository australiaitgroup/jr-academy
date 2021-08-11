import contentArray from '@app/components/contents/LandingPage/recruitmentProgram.json';
import Styled from '@app/components/Styled-components';
import recruitmentFigure from '@app/images/background/recruitment.svg';
import { breakpoints, colors, dimensions } from '@app/styles/variables';
import { css } from '@emotion/core';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 3rem;
	text-align: center;
	z-index: 1;
`;

const Figure = () => (
	<div
		css={css`
			background-image: url(${recruitmentFigure});
			background-repeat: no-repeat;
			background-position: center;
			padding: 95px;
			@media (max-width: ${breakpoints.xl}px) {
				padding: 70px 105px;
				background-size: 100%;
				margin: auto;
				background-position: top;
			}
		`}
	/>
);

const TableWrapper = styled.div`
	margin: 40px 110px;
	padding: 50px;
	background-color: ${colors.white};
	border-radius: 20px;
	box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
	@media (max-width: ${breakpoints.xl}px) {
		width: 368px;
		margin: 3rem auto;
		padding: 0 1rem;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	@media (max-width: ${breakpoints.xl}px) {
		display: flex;
		flex-direction: column-reverse;
		padding: 1rem;
	}
`;

const Column = styled.div``;

const Row = styled.div`
	margin: auto;
	width: 400px;
	text-align: left;
	&:last-of-type {
		text-align: center;
	}
	@media (max-width: ${breakpoints.xl}px) {
		width: 210px;
		margin-top: 20px;
	}
`;

const Button = styled.button`
	text-align: center;
	margin: 35px auto 0;
	width: 135px;
	height: 45px;
	border-radius: 20px;
	border-style: solid;
	border: double 2px transparent;
	background-image: linear-gradient(${colors.white}, ${colors.white}),
		linear-gradient(to bottom, #5fe4c5, #2bc0e4);
	background-clip: padding-box, border-box;
	span {
		font-size: ${dimensions.fontSize.medium};
		font-weight: 300;
		color: ${colors.button};
	}
	@media (max-width: ${breakpoints.xl}px) {
		margin: 20px 0 35px;
		width: 120px;
		height: 30px;
	}
`;

const BusinessCooperation = () => (
	<Styled.Section>
		<Wrapper>
			<Styled.Heading.Subtitle>
				Recruitment Program
			</Styled.Heading.Subtitle>
			<TableWrapper>
				<Grid>
					<Column>
						<Row>
							<Styled.Text.P>
								{contentArray[0].content}
							</Styled.Text.P>
						</Row>
						<Row>
							<Button>
								<Styled.Text.NewLine>
									Apply Now
								</Styled.Text.NewLine>
							</Button>
						</Row>
					</Column>
					<Column>
						<Row>
							<Figure />
						</Row>
					</Column>
				</Grid>
			</TableWrapper>
		</Wrapper>
	</Styled.Section>
);

export default BusinessCooperation;
