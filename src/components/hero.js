import React from 'react'
// import catAndHumanIllustration from "../images/flame-teamwork.png";
// import moonManIllustration from "../images/flame-759.png";
import planetIllustration from "../images/open-peeps.png";

function Hero() {
    return (
        <section className="text-center">

        <h2 className="inline-block p-3 mb-0 text-6xl font-k">
        Hi there, Welcome to Kenny&#39;s World!
        </h2>


        <p className="leading-loose mb-10 text-md text-xl">
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
          className="block  mx-auto mb-8"
          
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
