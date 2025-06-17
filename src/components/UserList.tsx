import type { User } from "../@types/User.d.ts";
import type { DeleteHandler } from "../@types/EventHandler.d.ts";



interface Props {
	handleDelete: DeleteHandler;
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
							onClick={() => handleDelete(user)}
							style={{ marginLeft: '1rem' }}
						>
							삭제
						</button>
					</div>
				))
			}
		</>
	);
}