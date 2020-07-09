import React from "react";
import Card from "../components/card";

export function createCards(projects) {
	console.log("Pro ", projects);

	return projects.map((project, i) => (
		// console.log("node.data.title ", project.node.data.title)

		<Card key={i} id={project.node.data.id}  title={project.node.data.title} description={project.node.data.description} technology= {project.node.data.technology}/>
	));
}
