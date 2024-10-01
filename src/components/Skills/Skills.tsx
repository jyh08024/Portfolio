import { SkillsStyle, SkillsList } from "./styled";

const Skills = () => {

	return (
		<SkillsStyle>
			<SkillsList>
				<div>
					<p className='yellow'>&#123;</p>

					<p><span>"FRONT"</span>: <span className="key">&nbsp;&#91;</span></p>
					<p className='inline'><img src="/assets/icon/html.png" alt="icon" /><span className='key'>"HTML, CSS"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"JavaScript"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"TypeScript"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"LESS"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"SASS"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"JQUERY"</span>,</p>
					<p><span className="key">&#93;</span>,</p>

					<p><span>"MOBILE"</span>: <span className="key">&nbsp;&#91;</span></p>
					<p className='inline'><img src="/assets/icon/html.png" alt="icon" /><span className='key'>"Dart"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"Flutter"</span>,</p>
					<p><span className="key">&#93;</span></p>

					<p><span>"BACKEND"</span>: <span className="key">&nbsp;&#91;</span></p>
					<p className='inline'><img src="/assets/icon/html.png" alt="icon" /><span className='key'>"PHP, CodeIgniter"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"Node.js"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"Nest.js"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"MySQL"</span>,</p>
					<p className='inline'><img src="/assets/icon/JS.svg" alt="icon" /><span className='key'>"MongoDB"</span></p>
					<p><span className="key">&#93;</span></p>

					<p className='yellow'>&#125;</p>
				</div>
			</SkillsList>
		</SkillsStyle>
	)
};

export default Skills;