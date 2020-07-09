import React from "react";

function Projects() {
	return (

<section className="bg-custom-green-200"> 

			<div className=' bg-red-700 '>
				<h1 className='font-k text-2xl uppercase'>Personal Projects</h1>
				{/* <p className='text-normal text-md'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s
				</p> */}
			</div>
		<div className='max-w-6xl bg-pink-300 m-2 pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>

			<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
				<img
					className='w-full'
					src='https://res.cloudinary.com/babyhulk/image/upload/v1588620339/project/paid_leaveV2.png'
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
					src='https://res.cloudinary.com/babyhulk/image/upload/v1589748445/project/vg.png'
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
