import { useQuery } from "react-query"
import { People } from "../components/table/table"

const getUsers = (url: string) => {
	const res = fetch(url)
		.then(response => response.json())
		.then(data => data)

	return res
}

export function useUsers(url: string) {
	return useQuery<People, Error>(["Users", url], () => getUsers(url))
}
