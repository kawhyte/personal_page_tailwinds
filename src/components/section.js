import React from "react";
// import photo from "../images/bubble.png";
import humanInSpaceIllustration from "../images//flame-759.png";
import gameIllustration from "../images/face.png";
import codeIllustration from "../images/open-peeps.png";

function Section() {
	return (
		<div className="bg-green-100 "> 
		<section className='max-w-6xl min-w-0 mx-auto mb-12 '>
			<div className='mx-20 mt-10  sm:mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
				<section className='m-4 rounded-lg border bg-white shadow-lg overflow-hidden'>
					<p className='text-lg sm:m-5 text-center md:text-2xl font-krubuler uppercase bg-orange-100 p-1 '>Software Engineer </p>
					<div className="hidden md:block">
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4 w-auto h-40'
							src={codeIllustration}
						/>
					</div>
					<div className='p-5 break-words text-gray-700 text-md font-light'>
					Currently, I&apos;m focused on developing web applications with C#, .NET Core, Node.js, and React/Gatsby. 
					<span  className="border-l-4 border-orange-300 pl-4 rounded text-left m-4 italic text-gray-700 hidden md:block"> &quot;A good programmer is someone who always looks both ways before crossing a one-way street&quot;. ~ Doug Linder</span> 

					</div>
				</section>
				<section className='m-4 rounded-lg border bg-white shadow-lg overflow-hidden'>
					<p className='text-lg sm:m-5 text-center md:text-2xl font-krubuler uppercase bg-orange-100 p-1 '>Observational Astronomer</p>
					<div className="hidden md:block">
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={humanInSpaceIllustration}
						/>
					</div>
					<div className='p-5 break-words text-gray-700 text-md font-light'>
					<span > I&apos;m a Software Developer by day and an amateur astronomer by night.</span>
					<span  className="border-l-4 border-orange-300 pl-4 rounded text-left m-4 italic text-gray-700 hidden md:block"> &quot;The good thing about science is that it&apos;s true whether or not you believe in it&quot;. ~ Neil deGrasse Tyson</span> 
					</div>
				</section>
				<section className='m-4 rounded-lg border bg-white shadow-lg overflow-hidden'>
					<p className='text-lg sm:m-5 text-center md:text-2xl font-krubuler uppercase bg-orange-100 p-1'>
					Nintendo Enthusiast	
					</p>
					<div className="hidden md:block">
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={gameIllustration}
						/>
					</div>
					<div className='p-5 break-words text-gray-700 text-md font-light'>
				
				Games with Mario, Zelda or Metriod... Nintendo all the way! ✌🏽+ 🎮
				<span  className="border-l-4 border-orange-300 pl-4 rounded text-left m-4 italic text-gray-700 hidden md:block"> &quot;When my dad was young he shot marbles. When I was young I played Marble Madness on my Nintendo Entertainment System&quot;. ~ Kevin James Breaux</span> 

					</div>
				</section>
			</div>
		</section>
		</div>
	);
}

export default Section;
