import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiAlertOctagon, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Header, RepositorySummary, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	stargazers_count: number;
	forks_count: number;
	open_issues_count: string;
}

interface Issue {
	id: string;
	title: string;
	html_url: string;
	user: {
		login: string;
	};
}

const Repository: React.FC = () => {
	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);

	const { params } = useRouteMatch<RepositoryParams>();

	useEffect(() => {
		api.get(`/repos/${params.repository}`).then(res => {
			setRepository(res.data);
		});
		api.get(`/repos/${params.repository}/issues`).then(res => {
			setIssues(res.data);
		});
	}, [params.repository]);

	return (
		<>
			<Header>
				<img src={logoImg} alt="Explore GitHub Logo" />
				<Link to="/">
					<FiChevronLeft size={16} title="Click to return to the dashboard" />
					Back
				</Link>
			</Header>
			{repository && (
				<RepositorySummary>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repository.forks_count}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Open issues</span>
						</li>
					</ul>
				</RepositorySummary>
			)}
			<Issues>
				{issues.map(issue => {
					return (
						<a key={issue.id} href={issue.html_url}>
							<FiAlertOctagon size={20} />
							<div>
								<strong>{issue.title}</strong>
								<p>{issue.user.login}</p>
							</div>
							<FiChevronRight size={20} />
						</a>
					);
				})}
			</Issues>
		</>
	);
};

export default Repository;
