interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

function isDuplicateRepository(
	repositories: Repository[],
	newRepo: string,
): boolean {
	const isDuplicate = repositories.reduce((acc, repository) => {
		if (repository.full_name === newRepo || acc) {
			return true;
		}
		return false;
	}, false);
	return isDuplicate;
}

export default isDuplicateRepository;
