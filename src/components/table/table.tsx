import {
	makeStyles,
	Paper,
	Table as TableComponent,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Avatar,
} from "@material-ui/core"

type Data = {
	id: string
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export type People = {
	data: Data[]
	page: number
	per_page: number
	support: { url: string; text: string }
	total: number
	total_pages: number
}

interface TableProps {
	people: People
}

const useStyles = makeStyles({
	table: {
		minWidth: 550,
	},
})

const Table: React.FC<TableProps> = ({ people }) => {
	const classes = useStyles()

	return (
		<TableContainer component={Paper}>
			<TableComponent className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>First name</TableCell>
						<TableCell>Last name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Avatar</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{people?.data &&
						people.data.map(row => (
							<TableRow key={row.id}>
								<TableCell component='th' scope='row'>
									{row.first_name}
								</TableCell>
								<TableCell>{row.last_name}</TableCell>
								<TableCell>{row.email}</TableCell>
								<TableCell>
									<Avatar
										alt={`${row.first_name} ${row.last_name}`}
										src={row.avatar}
									/>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</TableComponent>
		</TableContainer>
	)
}

export { Table }
