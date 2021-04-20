import styled from "styled-components"
import { GitHub } from "@material-ui/icons"

const Wrapper = styled.a`
	padding-left: 25px;
	display: flex;
	align-items: center;
	height: 60px;
	background: var(--dark-primary);
	position: relative;
`
const Text = styled.strong`
	margin-left: 10px;
	font-size: 20px;
`
const Logo = () => {
	return (
		<Wrapper href='/'>
			<GitHub
				style={{
					color: "white",
					fontSize: 26,
				}}
			/>
			<Text>MediaSeal</Text>
		</Wrapper>
	)
}

export { Logo }
