import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
	const [isExpanded, toggleExpansion] = useState(false);
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header className='bg-orange-200 '>
			<div className='flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8'>
				<Link to='/'>
					<h1 className='flex items-center text-black no-underline'>
						<span className='text-xl font-semibold tracking-tight'>
							{site.siteMetadata.title}
						</span>
					</h1>
				</Link>

				<button
					className='items-center block px-3 py-2 text-black border border-white rounded md:hidden'
					onClick={() => toggleExpansion(!isExpanded)}>
					<svg
						className='w-3 h-3 fill-current'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>

				<nav
					className={`${
						isExpanded ? `block` : `hidden`
					}  md:flex md:items-center w-full md:w-auto`}>
					{[
						{
							route: `/all-projects`,
							title: `Projects`,
							type: `internal`,
						},
						{
							route: `https://dev.to/kawhyte`,
							title: `Dev.to`,
							type: `external`,
						},
						{
							route: `https://codepen.io/kawhyte`,
							title: `CodePen`,
							type: `external`,
						},
						{
							route: `https://www.linkedin.com/in/kawhyte/`,
							title: `Contact me`,
							type: `external`,
						},
					].map((link) =>
						link.type === "internal" ? (
							<Link
								className='font-Montserrat block mt-4 text-black no-underline md:inline-block md:mt-0 md:ml-6 hover:text-gray-500 px-2'
								key={link.title}
								to={link.route}>
								{link.title}
							</Link>
						) : (
							<a
								key={link.title}
								href={link.route}
								target='_blank'
								rel='noopener noreferrer'
								className='font-Montserrat font-normal block mt-4 text-black no-underline md:inline-block md:mt-0 md:ml-6 hover:text-gray-500 px-2'>
								{link.title}
							</a>
						)
					)}
				</nav>
			</div>
		</header>
	);
}

export default Header;
