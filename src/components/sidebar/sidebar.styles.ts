import { NavLink } from "react-router-dom"
import styled from "styled-components"

interface NavProps {
	isOpen: boolean
}

const Nav = styled.nav<NavProps>`
	width: 250px;
	position: relative;
	background: var(--dark-primary);
	min-height: 100%;
	display: flex;
	flex-direction: column;

	@media (max-width: 412px) {
		position: absolute;
		width: 100%;
		display: ${props => (props.isOpen ? "block" : "none")};
	}
`

const Menu = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

const ListItem = styled.li`
	padding: 0;
	margin: 0;
`

export default styled(NavLink)`
	padding-left: 35px;
	display: flex;
	align-items: center;
	height: 50px;
	background: var(--dark-secondary);
	position: relative;

	&:hover {
		background: var(--dark-tertiary);

		&::before {
			top: 0;
			left: 0;
			position: absolute;
			height: 50px;
			width: 6px;
			background: #79a5c8;
			content: "";
		}
	}

	&.active {
		&::before {
			top: 0;
			left: 0;
			position: absolute;
			height: 50px;
			width: 6px;
			background: white;
			content: "";
		}
	}

	@media (max-width: 412px) {
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		position: relative;

		&.active {
			text-decoration: underline;

			&::before {
				display: none;
			}
		}
	}
`

const MenuText = styled.p`
	margin-left: 10px;
	@media (max-width: 412px) {
		margin: 0;
	}
`

const Burger = styled.div`
	position: absolute;
	top: 16px;
	left: 12px;
	z-index: 200;
`

const Wrapper = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
`

const Content = styled.div`
	flex: 1;
`

const BottomOptions = styled.div`
	background: var(--dark-primary);
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid hsla(0, 0%, 100%, 0.1);
`

const BottomLink = styled.div`
	padding: 4px 16px 0 16px;
	display: flex;
	align-items: center;
	background: var(--dark-primary);
	position: relative;

	&:hover {
		> svg {
			fill: #79a5c8;
		}
	}

	@media (max-width: 412px) {
		display: flex;
		align-items: center;
		height: 50px;
		position: relative;

		span {
			display: none;

			svg {
			}
		}
	}
`

const Options = styled.div`
	position: absolute;
	top: 16px;
	right: 12px;
	z-index: 200;
`

export {
	BottomOptions,
	BottomLink,
	Burger,
	Content,
	Menu,
	MenuText,
	Wrapper,
	Nav,
	ListItem,
	Options,
}
