import React from "react";
// import photo from "../images/bubble.png";
import catAndHumanIllustration from "../images//flame-759.png";

function Section() {
	return (
		<section className='bg-custom-green-20 mb-10 max-w-6xl mx-auto'>
			<div className='flex justify-between mx-12'>
				<section className='w-1/3 flex flex-col justify-between m-4 rounded-lg bg-custom-green-200'>
					<p className='p-5 text-2xl font-k uppercase'>Code</p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={catAndHumanIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud
					</div>
				</section>
				<section className='w-1/3 flex flex-col justify-between m-4 rounded-lg bg-custom-orange-400'>
					<p className='p-5 text-2xl font-k uppercase'>Look to the sky</p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={catAndHumanIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud
					</div>
				</section>
				<section className='w-1/3 flex flex-col justify-between m-4 rounded-lg bg-custom-green-200'>
					<p className='p-5 text-2xl font-k uppercase'>
						Mario, Zelda & Metriod
					</p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={catAndHumanIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud
					</div>
				</section>
			</div>
		</section>
	);
}

export default Section;
