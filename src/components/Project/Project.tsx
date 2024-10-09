import { ProjectItem, ProjectList, ProjectStyle } from "./styled";


const Project = () => {
	return (
		<ProjectStyle>
			<div className="title"><b>PROJECT</b></div>

			<ProjectList>
				<ProjectItem>
					<div className="project_title">PlanWith</div>
				</ProjectItem>
			</ProjectList>
		</ProjectStyle>
	)
};

export default Project;