import { QueryClient, QueryClientProvider } from "react-query"
import { Layout } from "./components"
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout />
		</QueryClientProvider>
	)
}

export default App
