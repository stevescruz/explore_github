import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositorySummary, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logoImg} alt="Explore GitHub Logo" />
				<Link to="/">
					<FiChevronLeft size={16} title="Click to return to the dashboard" />
					Back
				</Link>
			</Header>
			<RepositorySummary>
				<header>
					<img
						src="https://avatars3.githubusercontent.com/u/60204789?s=460&u=dfa937c94e27d06e251e8dbc076c94110d4641aa&v=4"
						alt="Steve Cruz"
					/>
					<div>
						<strong>stevescruz/explore_github</strong>
						<p>Repository description</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>2008</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>17</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>322</strong>
						<span>Open issues</span>
					</li>
				</ul>
			</RepositorySummary>
			<Issues>
				<Link to="test">
					<div>
						<strong>explore-github-duplicate-values-not-handled</strong>
						<p>Steve Cruz</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;
