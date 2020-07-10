import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createCards } from "../common/createCards";
// import arrow from "../images/icons/icons8-forward-small.png";

function Projects() {
	const data = useStaticQuery(graphql`
		{
			allAirtable {
				edges {
					node {
						data {
							demo
							description
							github
							id
							image
							technology
							technology_array
							title
							image
						}
						recordId
					}
				}
			}
		}
	`);

	const [state] = useState(data.allAirtable.edges);

	console.log(state);

	let projects = createCards(state);

	return (
		<section className='pb-12'>
			<div className='container sm:mx-auto flex justify-between items-end mb-2 mt-6  '>
				<p className='font-k text-2xl uppercase mb-6 bg-orange-100 p-1'>Personal Projects</p>

				{/* <div className='flex'>
					<Link to={`projects`}>
						<p className='text-sm text-blue-600 pb-1 mb-6 '>
							View All Projects
						</p>
					</Link>
					<Link to={`projects`}>
						<img src={arrow} width='20' height='1' alt='arrow' />
					</Link>
				</div> */}

				{/* <p className='text-normal text-md'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s
				</p> */}
			</div>
			<div className='max-w-6xl m-2 pl-3 gap-6 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
				{projects}
			</div>
		</section>
	);
}

export default Projects;
