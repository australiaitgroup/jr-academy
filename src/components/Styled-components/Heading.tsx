import { colors, dimensions } from '@app/styles/variables';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: ${dimensions.fontSize.title}px;
	font-weight: semibold;
	color: ${colors.context};
	padding: 10px 0; 
`;

const Subtitle = styled.h2`
	font-size: ${dimensions.fontSize.large}px;
	font-weight: semibold;
	color: ${colors.context};
`;

const H3 = styled.h3`
	font-size: ${dimensions.fontSize.medium}px;
	font-weight: regular;
	color: ${colors.context};
	padding: 3px 0
`;

export default { Title, Subtitle, H3 };
