import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const FluidImage = ({ imgName }) => (
	<StaticQuery
		query={graphql`
			query {
				allImageSharp {
					edges {
						node {
							fluid(maxWidth: 500) {
								...GatsbyImageSharpFluid
								originalName
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.allImageSharp.edges.find(
				edge => edge.node.fluid.originalName === imgName
			);
			if (!image) {
				return null;
			}

			return <Img fluid={image.node.fluid} />;
		}}
	/>
);

FluidImage.propTypes = {
	imgName: PropTypes.string
};

FluidImage.defaultProps = {
	imgName: ''
};

export default FluidImage;
