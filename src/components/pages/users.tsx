import styled from "styled-components"
import { Table } from "../table/table"
import { useUsers } from "../../hooks/"

const Wrapper = styled.main`
	padding: 24px;
	width: 100%;
	flex: 1;

	@media (max-width: 412px) {
		padding: 40px 0;
	}
`

const Users = () => {
	const { data } = useUsers("https://reqres.in/api/users")

	return (
		<Wrapper>
			<h1>Users</h1>
			{data && <Table people={data} />}
		</Wrapper>
	)
}

export { Users }
