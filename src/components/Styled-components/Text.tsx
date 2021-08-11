import { dimensions } from '@app/styles/variables';
import { colors } from '@app/styles/variables';
import styled from 'styled-components';

const P = styled.p`
	font-size: ${dimensions.fontSize.regular}px;
	font-weight: lighter;
	color: ${colors.context};
`;

const Span = styled.span`
	padding-right: 5px;
`;

const NewLine = styled.span`
	display: block;
`;

export default { P, Span, NewLine };
