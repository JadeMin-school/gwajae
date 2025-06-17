import type { User } from "../User.d.ts";



type Props = {
	handleDelete: (id: number) => void;
	filteredUsers: User[];
}

export default function UserList({ handleDelete, filteredUsers }: Props) {
	return (
		<>
			{
				filteredUsers.map(user => (
					<div
						key={user.id}
						style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem' }}
					>
						<input
							type="checkbox"
							style={{ marginRight: '1rem' }}
						/>
						<div style={{ flexGrow: 1 }}>
							<strong>{ user.name }</strong> ({ user.email })
							<br/>
							<small>Company: { user.company.name }</small>
						</div>
						<button
							onClick={() => handleDelete(user.id)}
							style={{ marginLeft: '1rem' }}
						>
							Delete
						</button>
					</div>
				))
			}
		</>
	);
}