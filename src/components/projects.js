import React from "react";

function Projects() {
	return (

<section className="bg-custom-green-200"> 

		<div className='  m-2 pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
			<div className='p-10 bg-red-700 h-64'>
				<h1 className='font-k text-5xl'>Projects </h1>
				<p className='text-normal text-md'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s
				</p>
			</div>

			<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
				<img
					className='w-full'
					src='https://res.cloudinary.com/babyhulk/image/fetch/v1594231340/https://res.cloudinary.com/babyhulk/image/upload/v1594066224/Race/91zuUFIBYDL.jpg'
					alt='Sunset in the mountains'
				/>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
					<p className='text-gray-700 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla! Maiores et perferendis eaque,
						exercitationem praesentium nihil.
					</p>
				</div>
				<div className='px-6 py-4'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#photography
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#travel
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
						#winter
					</span>
				</div>
			</div>
      
			<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
				<img
					className='w-full'
					src='https://res.cloudinary.com/babyhulk/image/fetch/v1594231340/https://res.cloudinary.com/babyhulk/image/upload/v1594066224/Race/91zuUFIBYDL.jpg'
					alt='Sunset in the mountains'
				/>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
					<p className='text-gray-700 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla! Maiores et perferendis eaque,
						exercitationem praesentium nihil.
					</p>
				</div>
				<div className='px-6 py-4'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#photography
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						#travel
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
						#winter
					</span>
				</div>
			</div>
		</div>
    </section>
	);
}

export default Projects;
