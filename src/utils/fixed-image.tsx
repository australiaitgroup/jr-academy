import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FixedImage = props => (
	<StaticQuery
		query={graphql`
			query {
				allImageSharp {
					edges {
						node {
							fixed {
								...GatsbyImageSharpFixed
								originalName
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.allImageSharp.edges.find(
				edge => edge.node.fixed.originalName === props.imgName
			);
			if (!image) {
				return null;
			}
			// tslint:disable-next-line:no-shadowed-variable
			const Image = styled(props => <Img {...props} />)`
				width: ${props.width} !important;
				height: ${props.height} !important;
				zoom: ${props.zoom};
			`;

			return <Image fixed={image.node.fixed} />;
		}}
	/>
);

FixedImage.propTypes = {
	imgName: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	zoom: PropTypes.number
};

FixedImage.defaultProps = {
	imgName: '',
	width: '',
	height: '',
	zoom: 1
};
export default FixedImage;
