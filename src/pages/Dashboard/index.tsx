import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Explore GitHub" />
			<Title>Explore repositories at GitHub.</Title>
			<Form>
				<input placeholder="Type the repository name" />
				<button type="submit">Search</button>
			</Form>
			<Repositories>
				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>

				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>

				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>

				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>

				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>

				<a href="test">
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Find exciting projects.</p>
					</div>
					<FiChevronRight
						size={20}
						title="Click this arrow to view the repository"
					/>
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
