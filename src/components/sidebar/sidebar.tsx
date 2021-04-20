import { CSSProperties } from "@material-ui/styles"
import { IconButton } from "@material-ui/core"
import {
	Apps,
	Close,
	VerifiedUser,
	People,
	Person,
	Policy,
	Description,
	Dashboard,
	CloudDownload,
	Notifications,
	Link as LinkIcon,
	Menu as MenuIcon,
	MoreVert,
} from "@material-ui/icons"
import {
	BottomOptions,
	BottomLink,
	Burger,
	Content,
	Menu,
	MenuText,
	Nav,
	Wrapper,
	ListItem,
	Options,
} from "./sidebar.styles"
import Link from "./sidebar.styles"
import { useState } from "react"

interface SideBarProps {
	mobile: boolean
}

const Sidebar: React.FC<SideBarProps> = ({ mobile }) => {
	const [open, setOpen] = useState(false)

	const menuIconStyle: CSSProperties = {
		color: "var(--light-primary)",
		fontSize: "26px",
		padding: 0,
		display: open ? "none" : "visible",
	}

	return (
		<Wrapper>
			{mobile && (
				<Burger>
					<IconButton
						style={menuIconStyle}
						aria-label='navigation-menu'
						component='span'
						onClick={() => setOpen(!open)}
					>
						{open ? <Close /> : <MenuIcon />}
					</IconButton>
				</Burger>
			)}
			{mobile && (
				<Options>
					<IconButton
						style={menuIconStyle}
						aria-label='menu'
						component='span'
					>
						{!open ? <MoreVert /> : null}
					</IconButton>
				</Options>
			)}
			<Nav isOpen={open}>
				<Menu>
					<ListItem>
						<Link to='/dashboard'>
							<Dashboard style={menuIconStyle} />
							<MenuText>Dashboard</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/files'>
							<Description style={menuIconStyle} />
							<MenuText>Files</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/policies'>
							<Policy style={menuIconStyle} />
							<MenuText>Polices</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/users'>
							<Person style={menuIconStyle} />
							<MenuText>Users</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/groups'>
							<People style={menuIconStyle} />
							<MenuText>Groups</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/audit'>
							<VerifiedUser style={menuIconStyle} />
							<MenuText>Audit</MenuText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/applications'>
							<Apps style={menuIconStyle} />
							<MenuText>Applications</MenuText>
						</Link>
					</ListItem>
				</Menu>
				<Content>&nbsp;</Content>
				{!open && (
					<BottomOptions>
						<BottomLink>
							<CloudDownload style={menuIconStyle} />
						</BottomLink>
						<BottomLink>
							<Notifications style={menuIconStyle} />
						</BottomLink>
						<BottomLink>
							<LinkIcon style={menuIconStyle} />
						</BottomLink>
					</BottomOptions>
				)}
			</Nav>
		</Wrapper>
	)
}

export { Sidebar }