import React from "react";
import PropTypes from "prop-types";
import { iconList } from "../common/helper";
import defaultImg from "../images/defaultIcon.png";
let border = "";
let isDisabled = "";

function Card({
	title,
	description,
	technology_array,
	github_url,
	demo_url,
	image,
	id,
}) {
	if (id % 2 === 0) {
		border = "border-orange-300";
	} else {
		border = "border-green-300";
	}

	if (demo_url === null) {
		isDisabled = "cursor-not-allowed opacity-50 bg-gray-500 text-gray-300 ";
	} else {
		isDisabled =
			"  text-gray-900 hover:bg-black hover:text-white hover:border-transparent ";
	}

	return (
		<>
			<section
				className={
					"border bg-white shadow-md  justify-between  md:shadow-lg overflow-hidden w-5/6 sm:w-full flex flex-col  rounded-lg mx-auto container "
				}>
				<div
					className='bg-cover bg-center h-56  px-4'
					style={{ backgroundImage: `url(${image})` }}></div>

				<div className='flex flex-col items-start border-b border-gray-300 '>
					<p className='pt-4 pl-5 text-xl text-gray-900 font-normal font-Montserrat'>
						{title}
					</p>

					<div className='px-5 pt-2 pb-5 break-words text-gray-700 text-md font-light font-Montserrat'>
						{description}
					</div>
				</div>

				<div className='flex justify-center leading-none md:px-1'>
					<div className='flex flex-wrap  my-2 '>
						{technology_array.map((tech, i) => {
							return (
								<div key={i} className={"flex  flex-col  my-2 mx-2 " + border}>
									<div>
										<img
											alt='technology icon'
											className='mx-auto h-10 '
											src={
												iconList[technology_array[i]]
													? iconList[technology_array[i]].icon
													: defaultImg
											}
										/>
									</div>
									<span
										target='_blank'
										rel='noopener noreferrer'
										className={
											"font-Montserrat font-light text-xs inline-block uppercase last: m-1 mr-1 " +
											border
										}>
										{tech}
									</span>
								</div>
							);
						})}
					</div>
				</div>

				<div className='bg-gray-100'>
					<div className='flex justify-center p-4 border-t border-gray-300 '>
						<a href={github_url} target='_blank' rel='noopener noreferrer'>
							<button className='mr-12 bg-white hover:bg-black text-gray-900 font-normal font-Montserrat hover:text-white py-2 px-4 border border-gray-500  hover:border-transparent rounded'>
								Github
							</button>
						</a>
						<a href={demo_url} target='_blank' rel='noopener noreferrer'>
							<button
								className={
									" bg-white py-2 px-4 border  border-gray-500 font-normal font-Montserrat  rounded text-gray-900" +
									isDisabled
								}>
								Demo
							</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	github_url: PropTypes.string.isRequired,
	technology: PropTypes.string.isRequired,
	technology_array: PropTypes.array.isRequired,
	demo_url: PropTypes.string,
	image: PropTypes.string.isRequired,
};

export default Card;
