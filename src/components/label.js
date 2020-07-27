import React from "react";
import arrow from "../images/icons/icons8-forward-small.png";
import { Link } from "gatsby";
import PropTypes from "prop-types";

function Label({ text, showMore }) {
	return (
		<>
			<p className='font-Montserrat sm:text-xl lg:text-2xl uppercase mb-6 bg-orange-200 px-2'>
				{text}
			</p>
			{showMore == true ? (
				<div className='flex'>
					<Link to={`all-projects`}>
						<p className='text-sm text-blue-600 pb-1 mb-6 '>
							View All Projects
						</p>
					</Link>
					<Link to={`all-projects`}>
						<img src={arrow} width='20' height='1' alt='arrow' />
					</Link>
				</div>
			) : (
				""
			)}
		</>
	);
}
Label.propTypes = {
	text: PropTypes.string.isRequired,
	showMore: PropTypes.bool.isRequired,
};

export default Label;
