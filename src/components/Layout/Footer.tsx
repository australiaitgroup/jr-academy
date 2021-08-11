import Styled from '@app/components/Styled-components';
import { breakpoints } from '@app/styles/variables';
import FixedImage from '@app/utils/fixed-image';
import ResponsiveRow from '@app/utils/responsive-row';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	margin: 0 80px;
	padding: 10px 80px;
	grid-area: footer;
	@media (max-width: ${breakpoints.xl}px) {
		padding: 10px 0
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	@media (max-width: ${breakpoints.xl}px) {
		grid-template-columns: 3fr 2fr 2fr;
	}
	@media (max-width: ${breakpoints.lg}px) {
		grid-template-columns: 1fr;
		text-align: center;
		padding: 20px 0 40px;
	}
`;

const Column = styled.div`
	margin: 0 1rem;
	padding: 20px 0;
	& > p {
		margin-bottom: 20px;
		@media (max-width: ${breakpoints.lg}px) {
			margin-bottom: 0;
		}
	}
	@media (max-width: ${breakpoints.lg}px) {
		margin: auto;
		margin-bottom: 1rem;
		padding: 0;
	}
`;

const Row = styled.div`
	margin: 20px 16px;
	display: flex;
	line-height: auto;
	@media (max-width: ${breakpoints.lg}px) {
		text-align: center;
		margin: auto;
		justify-content: center;
	}
`;

const Logo = styled.div`
	padding-left: 48px;
	margin: 20px 0 6px;
	@media (max-width: ${breakpoints.lg}px) {
		padding-left: 0;
		margin-bottom: 0;
	}
`;

const ResponsiveSpace = styled.div`
	@media (max-width: ${breakpoints.lg}px) {
		height: 1rem;
	}
`;

const Address = () => (
	<Styled.Text.P>
		<Styled.Text.NewLine>
			<strong>JR Academy Locations</strong>
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			Brisbane: Level 13b, 116 Adelaide Street, Brisbane CBD
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			Melbourne: Suite 4.03, 838 Collins St, Docklands, Melbourne
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			Sydney: Level 8, 11 York st, Wynyard, Sydney CBD
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			Adelaide: Business Hub, 155 Waymouth St, Adelaide SA 5000
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			<strong>Email: </strong>
			career@jiangren.com.au/hello@jiangren.com.au
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			<strong>Mobile: </strong>0421-672-555{' '}
		</Styled.Text.NewLine>
		<Styled.Text.NewLine>
			<strong>ABN: </strong> 26621887572
		</Styled.Text.NewLine>
	</Styled.Text.P>
);

const Footer = () => (
	<FooterWrapper>
		<Styled.Section>
			<Grid>
				<Column>
						<Logo>
							<JRLogo />
						</Logo>
					<Styled.Heading.H3>
						JR Academy - EduTech
					</Styled.Heading.H3>
					<Styled.Text.P>
						Online Learning Courses and Internship
					</Styled.Text.P>
					<ResponsiveRow isMobile={false}>
						<Address />
					</ResponsiveRow>
				</Column>
				<Column>
					<Row>
						<Styled.Text.P>
							<Styled.Text.NewLine>
								<strong>Popular Course</strong>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Business Data Analytics
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Full-Stack Web Development
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Intro to Python
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Data Science Immersive
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Intro to Web Development
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Link to='#'>
								iOS System Development
							</Styled.Link>
						</Styled.Text.P>
					</Row>
					<ResponsiveSpace />
					<Row>
						<Styled.Text.P>
							<Styled.Text.NewLine>
								<strong>Career Coaching</strong>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Interview Coaching
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Mock Interview
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Resume Critique
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Product Management
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Career Counselling
								</Styled.Link>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<Styled.Link to='#'>
									Cover Letter Guide
								</Styled.Link>
							</Styled.Text.NewLine>
						</Styled.Text.P>
					</Row>
				</Column>
				<Column>
					<Row>
						<Styled.Text.P>
							<Styled.Text.NewLine>
								<strong>
									<Styled.Link to='#'>
										Course Tutorials
									</Styled.Link>
								</strong>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<strong>
									<Styled.Link to='#'>
										Community Events
									</Styled.Link>
								</strong>
							</Styled.Text.NewLine>
							<Styled.Text.NewLine>
								<strong>
									<Styled.Link to='#'>Jobpin</Styled.Link>
								</strong>
							</Styled.Text.NewLine>
							<strong>
								<Styled.Link to='#'>JR Solution</Styled.Link>
							</strong>
						</Styled.Text.P>
					</Row>
				</Column>
				<Column>
					<ResponsiveRow isMobile={true}>
						<Address />
					</ResponsiveRow>
				</Column>
			</Grid>
		</Styled.Section>
	</FooterWrapper>
);

const JRLogo = () => (
	<FixedImage imgName='jr-logo-circle.png' width='50px' height='50px' />
);

export default Footer;
