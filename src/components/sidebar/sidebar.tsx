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
	List,
	ListText,
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
						style={{ ...menuIconStyle, display: "visible" }}
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
						style={{ ...menuIconStyle, display: "visible" }}
						aria-label='menu'
						component='span'
					>
						{!open ? <MoreVert /> : null}
					</IconButton>
				</Options>
			)}
			<Nav isOpen={open}>
				<List>
					<ListItem>
						<Link to='/dashboard' onClick={() => setOpen(false)}>
							<Dashboard style={menuIconStyle} />
							<>Dashboard</>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/files' onClick={() => setOpen(false)}>
							<Description style={menuIconStyle} />
							<ListText>Files</ListText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/policies' onClick={() => setOpen(false)}>
							<Policy style={menuIconStyle} />
							<ListText>Polices</ListText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/users' onClick={() => setOpen(false)}>
							<Person style={menuIconStyle} />
							<ListText>Users</ListText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/groups' onClick={() => setOpen(false)}>
							<People style={menuIconStyle} />
							<ListText>Groups</ListText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/audit' onClick={() => setOpen(false)}>
							<VerifiedUser style={menuIconStyle} />
							<ListText>Audit</ListText>
						</Link>
					</ListItem>
					<ListItem>
						<Link to='/applications' onClick={() => setOpen(false)}>
							<Apps style={menuIconStyle} />
							<ListText>Applications</ListText>
						</Link>
					</ListItem>
				</List>
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
