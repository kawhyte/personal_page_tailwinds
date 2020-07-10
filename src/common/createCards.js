import React from "react";
import Card from "../components/card";

export function createCards(projects) {
	console.log("Pro ", projects);

	let sortedPages = projects.sort(function (a, b) {
		// let nameA = a.data.Name.toUpperCase();
		// let nameB = b.data.Name.toUpperCase();

		if (a.node.data.id < b.node.data.id) {
			return -1;
		}
		if (a.node.data.id > b.node.data.id) {
			return 1;
		}

		// names must be equal
		return 0;
	});

	return sortedPages.map((project, i) => (
		// console.log("node.data.title ", project.node.data.title)

		<Card
			key={i}
			id={project.node.data.id}
			title={project.node.data.title}
			description={project.node.data.description}
			technology={project.node.data.technology}
			github_url={project.node.data.github}
			demo_url={project.node.data.demo}
			technology_array={project.node.data.technology_array}
		/>
	));
}
