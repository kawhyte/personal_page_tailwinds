import React from 'react'
// import catAndHumanIllustration from "../images/flame-teamwork.png";
// import moonManIllustration from "../images/flame-759.png";
import planetIllustration from "../images/open-peeps.png";

function Hero() {
    return (
        <section className="text-center">

        <p className=" mb-0 text-4xl md:text-6xl font-k pr-3 leading-none">
        Hi there!  
        </p>
        <h2 className="inline-block mb-4 text-4xl md:text-6xl font-k leading-none">
        Welcome to Kenny&#39;s World.

        </h2>


        <p className="leading-loose sm:text-sm mb-10 md:text-lg ">
        Software Engineer | Observational Astronomer | Nintendo Enthusiast {` `}
          {/* <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a> */}
          {/* , a utility-first CSS framework. */}
        </p>

        <div className="flex justify-between"> 
        {/* <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto mb-8  w-48 h-48 h-"
          src={catAndHumanIllustration}
          
          
        /> */}
        <img
          alt="Cat and human sitting on a couch"
          className="block  mx-auto mb-8 h-64 md:h-auto"
          
          src={planetIllustration}
        />
        {/* <img
          alt="Cat and human sitting on a couch"
          className="block  mx-auto mb-8 w-48 h-48  "
          src={moonManIllustration}
        /> */}
</div>
        

      </section>
    )
}

export default Hero
