import React from "react";
import PropTypes from "prop-types";
import catAndHumanIllustration from "../images//flame-759.png";
let bgColor = "";

function Card({ title, id, description, technology }) {
	console.log(title);
	console.log(id);

	if (id % 2 === 0) {
		bgColor = "bg-custom-orange";
	} else {
		bgColor = "bg-custom-green";
	}

	return (
		<section className={"flex flex-col  m-4 rounded-lg min-w-0  " + bgColor}>
		<div className="mx-auto"><p className='p-5 text-2xl font-k uppercase'>{title}</p></div>	
			
			
			<div>
				<img
					alt='Cat and human sitting on a couch'
					className='block mx-auto mb-4   w-40 h-40'
					src={catAndHumanIllustration}
				/>
			</div>


			<div className='p-5 break-words'>{description}</div>
			<div className='p-5 break-words'>{technology}</div>


			<div className="flex justify-center bg-red-200 p-4">
				<button className='mr-6 bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
					Button
				</button>
				<button className='bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
					Button
				</button>
			</div>
		</section>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	technology: PropTypes.string.isRequired,
};

export default Card;
