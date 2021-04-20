import styled from "styled-components"
import { useGroups } from "../../hooks/"

const Wrapper = styled.main`
	padding: 24px;
	width: 100%;
	flex: 1;

	@media (max-width: 412px) {
		padding: 40px 10px;
	}
`

const Groups = () => {
	const { data } = useGroups("https://reqres.in/api/groups")

	return (
		<Wrapper>
			<h1>Groups</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Wrapper>
	)
}

export { Groups }
