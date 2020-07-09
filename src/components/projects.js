import React,{ useState } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { createCards } from "../common/createCards"
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
				  title
				}
				recordId
			  }
			}
		  }
    }
  `)




const [state] = useState(data.allAirtable.edges)


console.log(state)

let projects = createCards(state)




return (

<section className=""> 

			<div className=' bg-red-700 '>
				<h1 className='font-k text-2xl uppercase'>Personal Projects</h1>
				{/* <p className='text-normal text-md'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s
				</p> */}
			</div>
		<div className='max-w-6xl m-2 pl-3 gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
{projects}
			
		</div>
    </section>
	);
}

export default Projects;
