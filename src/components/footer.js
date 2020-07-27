import React from "react";

function Footer() {
	return (
		<footer className='bg-orange-200'>
			<nav className='flex justify-between max-w-6xl p-4 mx-auto text-sm md:p-8'>
				<p className='text-xs sm:text-sm text-black font-Montserrat'>
					Created by{` `}
					<a
						className='text-xs sm:text-sm font-bold font-Montserrat no-underline'
						href='/'
						target='_blank'
						rel='noopener noreferrer'>
						Kenny Whyte
					</a>
				</p>

				<div className='text-xs sm:text-sm py-1 px-1 text-black font-Montserrat'>
					<span className='pr-2'>Illustrations and Icons from</span>

					<a
						target='_blank'
						rel='noopener noreferrer'
						className=' text-blue-500 hover:text-indigo-900'
						href='https://icons8.com/'>
						icons8
					</a>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
