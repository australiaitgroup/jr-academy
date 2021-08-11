import contentArray from '@app/components/contents/LandingPage/ourIntroduction.json';
import Styled from '@app/components/Styled-components';
import { breakpoints } from '@app/styles/variables';
import React from 'react';
import styled from 'styled-components';
import OurPartners from './OurPartners';

const Wrapper = styled.div`
	margin: 0 60px 40px;
	padding: 1rem 40px 0;
	text-align: center;
	z-index: 2;
`;

const FlexLayout = styled(props => <div {...props} />)`
	margin-top: 2.5rem;
	display: flex;
	flex-direction: ${props => props.direction};
	align-content: center;
	align-items: center;
	justify-content: center;
	&:last-of-type {
		margin-top: 85px;
	}
	@media (max-width: ${breakpoints.xl}px) {
		margin-top: 1.5rem;
		flex-direction: column;
	}
`;

const BlankSpace = styled.div`
	padding: 40px;
`;

const Column = styled.div`
	flex: 1;
	@media (min-width: ${breakpoints.xl}px) {
		margin: auto 50px;
	}
`;

const Row = styled.div`
	margin: 1rem 0 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (max-width: ${breakpoints.xl}px) {
		max-width: 420px;
		margin: 1rem 0 0;
	}
`;

const OurIntroduction = () => (
	<Styled.Section>
		<Wrapper>
			{contentArray.map((item, i) => {
				const Icon =
					'iconFileName' in item
						? require(`../../../images/icons/landing-page/our-introduction/${item.iconFileName}.inline.svg`)
						: 'null';
				const TextContent =
					'content' in item ? (
						<Row
							dangerouslySetInnerHTML={{ __html: item.content }}
						/>
					) : null;
				const directionSwitch = param => {
					switch (param) {
						case 0:
							return 'row';
						case 1:
							return 'row-reverse';
						case 2:
							return 'row';
						case 3:
							return 'column';
						case 4:
							return 'row-reverse';
						case 5:
							return 'column';
						default:
							return null;
					}
				};

				return (
					<FlexLayout direction={directionSwitch(i)}>
						<Column>
							<Row>
								<Icon />
							</Row>
							<Row>
								<Styled.Heading.H3>
									{item.title}
								</Styled.Heading.H3>
							</Row>
						</Column>
						{i === 0 || i === 1 || i === 2 ? (
							<Column>
								<Styled.Text.P>{TextContent}</Styled.Text.P>
							</Column>
						) : null}
						{i === 3 ? (
							<Column>
								<Styled.Text.P>{TextContent}</Styled.Text.P>
								<BlankSpace />
							</Column>
						) : null}
						{i === 5 ? (
							<Column>
								<Row>
									<OurPartners />
								</Row>
							</Column>
						) : null}
					</FlexLayout>
				);
			})}
		</Wrapper>
	</Styled.Section>
);

export default OurIntroduction;
