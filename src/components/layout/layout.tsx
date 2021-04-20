import { useWindowSize } from "react-use"
import { Header, Sidebar } from "../"
import { HashRouter, Redirect, Route, Switch } from "react-router-dom"
import { Groups, Users } from "../pages"
import { DefaultWrapper, Flex, MobileWrapper } from "./layout.styles"

const MOBILE_WIDTH = 412

const Layout = () => {
	const { width } = useWindowSize()

	const isMobile = width < MOBILE_WIDTH
	const Wrapper = isMobile ? MobileWrapper : DefaultWrapper

	return (
		<Wrapper>
			<HashRouter>
				<Flex>
					<Header />
					<Sidebar mobile={isMobile} />
				</Flex>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/users' />
					</Route>
					<Route path='/users' component={Users} />
					<Route path='/groups' component={Groups} />
				</Switch>
			</HashRouter>
		</Wrapper>
	)
}

export { Layout }
