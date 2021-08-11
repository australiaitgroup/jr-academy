import contentArray from '@app/components/contents/LandingPage/careerCoaching.json';
import Styled from '@app/components/Styled-components';
import { breakpoints } from '@app/styles/variables';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 8rem 3rem;
	text-align: center;
	z-index: 2;
`;

const Grid = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: ${breakpoints.xl}px) {
		grid-template-columns: 1fr;
	}
`;

const Column = styled.div``;

const CareerCoaching = () => (
	<Styled.Section>
		<Wrapper>
			<Styled.Heading.Subtitle>Career Coaching</Styled.Heading.Subtitle>
			<Grid>
				{contentArray.map((item, i) => {
					const Icon = require(`../../../images/icons/landing-page/career-coaching/${item.imageFileName}.inline.svg`);

					return (
						<Column key={i}>
							<Icon height="80px" />
							<Styled.Textbox
								text={<Styled.Heading.H3><strong>{item.title}</strong></Styled.Heading.H3>}
								borderWidth={2}
								height={35}
								width={280}
							/>
							<Styled.Textbox
								text={
									<Styled.Text.P>
										{item.content}
									</Styled.Text.P>
								}
								borderWidth={1.5}
								height={120}
								width={280}
							/>
						</Column>
					);
				})}
			</Grid>
		</Wrapper>
	</Styled.Section>
);

export default CareerCoaching;
