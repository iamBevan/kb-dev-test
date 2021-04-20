import styled from "styled-components"
import { Logo } from "../"

const Wrapper = styled.header`
	background: var(--dark-primary);
	height: 60px;
	width: 100%;
	z-index: 100;

	@media (max-width: 412px) {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
	}
`

const Header = () => {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	)
}

export { Header }
