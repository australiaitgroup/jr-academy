const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const plugins = [
	`gatsby-plugin-react-helmet`,
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images`
		}
	},
	{
		resolve: `gatsby-plugin-styled-components`,
		options: {
			// Add any options here
		}
	},
	{
		resolve: `gatsby-plugin-typescript`,
		options: {
			isTSX: true,
			allExtensions: true
		}
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
		resolve: `gatsby-plugin-manifest`,
		options: manifestConfig
	},
	{
		resolve: 'gatsby-plugin-tslint',
		options: {
			test: /\.ts$|\.tsx$/,
			exclude: /(node_modules|cache|public)/
		}
	},
	{
		resolve: 'gatsby-plugin-react-svg',
		options: {
			rule: {
				include: /\.inline\.svg$/
			}
		}
	},
	`gatsby-plugin-emotion`
];

if (ANALYTICS_ID) {
	plugins.push({
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: ANALYTICS_ID
		}
	});
}

module.exports = {
	siteMetadata: {
		title: manifestConfig.name,
		description: `JR Academy`,
		author: `@JR Team`,
		menuLinks: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Chinese Main Site',
				link: 'https://jiangren.com.au/'
			},
			{
				name: 'Online Learning Platform',
				link: 'https://learn.jiangren.com.au/'
			},
			{
				name: 'Linkedin',
				link: 'https://linkedin.com/school/jr-academy'
			},
			{
				name: 'Meetup',
				link: 'https://www.meetup.com/itgroup/'
			}
		]
	},
	plugins
};
