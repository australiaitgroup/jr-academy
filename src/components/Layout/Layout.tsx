import '@app/styles/layout.css';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					menuLinks {
						name
						link
					}
				}
			}
		}
	`);

	return (
		<>
			<Header menuLinks={data.site.siteMetadata.menuLinks} />
			<main>{children}</main>
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
