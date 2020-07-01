import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Error, Repositories } from './styles';

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	// stargazers_count: number;
	// forks_count: number;
	// open_issues_count: string;
}

const Dashboard: React.FC = () => {
	const [newRepository, setNewRepository] = useState('');
	const [inputError, setInputError] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>(() => {
		const storedRepositories = localStorage.getItem(
			'@ExploreGithub:repositories',
		);
		if (storedRepositories) {
			return JSON.parse(storedRepositories);
		}
		return [];
	});

	useEffect(() => {
		localStorage.setItem(
			'@ExploreGithub:repositories',
			JSON.stringify(repositories),
		);
	}, [repositories]);

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>,
	): Promise<void> {
		event.preventDefault();

		if (!newRepository) {
			setInputError('Type the owner/name of the repository.');
			return;
		}
		try {
			const res = await api.get<Repository>(`/repos/${newRepository}`);

			const repository = res.data;

			setRepositories([...repositories, repository]);
			setNewRepository('');
			setInputError('');
		} catch (err) {
			setInputError('Error while searching for the repository.');
		}
	}

	return (
		<>
			<img src={logoImg} alt="Explore GitHub" />
			<Title>Explore repositories at GitHub.</Title>
			<Form hasError={!!inputError} onSubmit={handleAddRepository}>
				<input
					value={newRepository}
					onChange={e => setNewRepository(e.target.value)}
					placeholder="Type the repository name"
				/>
				<button type="submit">Search</button>
			</Form>
			{inputError && <Error>{inputError}</Error>}
			<Repositories>
				{repositories.map(repository => {
					return (
						<Link
							key={repository.full_name}
							to={`/repositories/${repository.full_name}`}
						>
							<img
								src={repository.owner.avatar_url}
								alt={repository.owner.login}
							/>
							<div>
								<strong>{repository.full_name}</strong>
								<p>{repository.description}</p>
							</div>
							<FiChevronRight size={20} title="Click to view the repository" />
						</Link>
					);
				})}
			</Repositories>
		</>
	);
};

export default Dashboard;
