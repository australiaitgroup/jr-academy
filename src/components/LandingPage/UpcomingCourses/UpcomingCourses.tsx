import contentArray from '@app/components/contents/LandingPage/upcomingCourses.json';
import Styled from '@app/components/Styled-components';
import { breakpoints } from '@app/styles/variables';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 2.5rem 0 0;
	text-align: center;
	z-index: 2;
`;

const Grid = styled.div`
	margin-top: 36px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	@media (max-width: ${breakpoints.xl}px) {
		grid-template-columns: 1fr;
	}
`;

const Content = styled.div`
	margin: 1rem;
	display: grid;
	grid-template-rows: 40px 40px auto;
	p:last-of-type {
		margin: 10px 0;
	}
`;

const UpcomingCourses = () => (
	<Styled.Section>
		<Wrapper>
			<Styled.Heading.Subtitle>Upcoming Courses</Styled.Heading.Subtitle>
			<Grid>
				{contentArray.map((item, i) => {
					const Icon = require(`../../../images/icons/landing-page/upcoming-courses/${item.imageFileName}.inline.svg`);
					const StyledContent = () => (
						<Content>
							<Styled.Heading.H3>{item.title}</Styled.Heading.H3>
							<Styled.Text.P>
								<strong>{item.nextClass}</strong>
							</Styled.Text.P>
							<Styled.Text.P>{item.intro}</Styled.Text.P>
						</Content>
					);

					return (
						<Styled.Card
							text={StyledContent()}
							image={<Icon width="80px" />}
							width={280}
							height={290}
							key={i}
						/>
					);
				})}
			</Grid>
		</Wrapper>
	</Styled.Section>
);

export default UpcomingCourses;
