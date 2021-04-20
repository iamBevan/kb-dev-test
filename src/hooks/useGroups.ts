import { useQuery } from "react-query"

const getGroups = (url: string) => {
	const res = fetch(url)
		.then(response => response.json())
		.then(data => data)

	return res
}

export function useGroups(url: string) {
	return useQuery(["Groups", url], () => getGroups(url))
}
