/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({actions:{createPage}})=>{
	const detailsPage = require('./src/data/wishaball.json')

	console.log(detailsPage)

	detailsPage.forEach(page=>{
		createPage({
			path:`wishaball/${page.path}`,
			component:require.resolve('./src/templete/detailsPage'),
			context:{
				title:page.organization,
				info:page.info,
				address:page.address,
				phone:page.phone,
				website:page.website,
				sport:page.sport,
				image:page.image
			}
		})
	})

}