import Background from '@app/components/Background/';
import BusinessCooperation from '@app/components/LandingPage/BusinessCooperation';
import CareerCoaching from '@app/components/LandingPage/CareerCoaching';
import OurIntroduction from '@app/components/LandingPage/OurIntroduction';
import RecruitmentProgram from '@app/components/LandingPage/RecruitmentProgram';
import UpcomingCourses from '@app/components/LandingPage/UpcomingCourses';
import Layout from '@app/components/Layout/';
import Styled from '@app/components/Styled-components';
import SEO from '@app/components/SEO';
import BannerImage from '@app/images/banners/laptop-guy.inline.svg';
import React from 'react';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Styled.Banner text={bannerText()} image={<BannerImage />} />
		<Background.PatternOne>
			<UpcomingCourses />
			<CareerCoaching />
		</Background.PatternOne>
		<Background.PatternTwo>
			<BusinessCooperation />
		</Background.PatternTwo>
		<Background.PatternThree>
			<RecruitmentProgram />
		</Background.PatternThree>
		<Background.PatternFour>
			<OurIntroduction />
		</Background.PatternFour>
	</Layout>
);

const bannerText = () => (
	<div>
		<Styled.Heading.Title>JR Academy</Styled.Heading.Title>
		<Styled.Heading.Subtitle>
			The Largest Asian IT Organisation in Australia
		</Styled.Heading.Subtitle>
		<Styled.Heading.H3>More than 8000 people choose us</Styled.Heading.H3>
		<Styled.Text.P>
			Provide the best IT training for people, improve their technical
			skills and competencies, make it easier for them to be employed.
		</Styled.Text.P>
		<Styled.Text.P>
			<Styled.Text.Span>Melbourne</Styled.Text.Span>
			<Styled.Text.Span>Sydney</Styled.Text.Span>
			<Styled.Text.Span>Brisbane</Styled.Text.Span>
			<Styled.Text.Span>Adelaide</Styled.Text.Span>
		</Styled.Text.P>
	</div>
);

export default IndexPage;
