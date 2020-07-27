import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createCards } from "../common/createCards";
import Label from "../components/label";
import PropTypes from "prop-types";

function Projects({ text, showMore, amountOfProjectsToShow }) {
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
							order
						}
						recordId
					}
				}
			}
		}
	`);

	const [state] = useState(data.allAirtable.edges);

	let projects = createCards(state);

	const itemsToRender = projects.slice(0, amountOfProjectsToShow);

	return (
		<section className='pb-12 mx-4 bg-white'>
			<div className=' container  sm:mx-auto flex justify-between items-end mb-2 mt-6   '>
				<Label text={text} showMore={showMore} />
			</div>
			<div className='mb-16 max-w-6xl m-2 px-3 gap-6  container mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
				{itemsToRender}
			</div>
		</section>
	);
}

Projects.propTypes = {
	text: PropTypes.string.isRequired,
	showMore: PropTypes.bool.isRequired,
	amountOfProjectsToShow: PropTypes.number.isRequired,
};

export default Projects;
