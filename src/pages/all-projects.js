import React from "react";
import Projects from "../components/projects";
import SEO from "../components/seo";
import Footer from "../components/footer";
import Header from "../components/header";

function projects() {
	return (
		<>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title='All Projects'
			/>
			<Header />
			<Projects
				text={"ALL PERSONAL PROJECTS"}
				showMore={false}
				amountOfProjectsToShow={100}
			/>
			<Footer />
		</>
	);
}

export default projects;
