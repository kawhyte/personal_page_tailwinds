import React from 'react'
import catAndHumanIllustration from "../images/open-peeps.png";

function Hero() {
    return (
        <section className="text-center">

        <h2 className="inline-block p-3 mb-0 text-6xl font-k">
        Hi there, I’m Kenny!
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
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        

      </section>
    )
}

export default Hero
