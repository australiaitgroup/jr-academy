import FixedImage from '@app/utils/fixed-image';
import { Link } from 'gatsby';
import React from 'react';

const JRLogo = () => (
	<Link to='/'>
		<FixedImage
			imgName='jr-logo-academy-transparent.png'
			width='221px'
			height='70px'
		/>
	</Link>
);

export default JRLogo;
