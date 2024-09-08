import React from "react";
import { AboutStyle, CodeBlock, BlockHeader, FileBar, FileItem } from "./styled";
import { FaReact } from "react-icons/fa";

const About = () => {
	return (
		<AboutStyle>
			<CodeBlock>
				<BlockHeader>
					<div className="red_dot"></div>
					<div className="orange_dot"></div>
					<div className="green_dot"></div>
				</BlockHeader>

				<FileBar>
					<div className="file_list">
						<FileItem>
							<FaReact />
							<p>About Me</p>
						</FileItem>
					</div>
				</FileBar>
			</CodeBlock>
		</AboutStyle>
	);
};

export default About;