import { useEffect, useState } from 'react';

export default function UserList() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [newUser, setNewUser] = useState({ name: '', email: '', company: { name: '' } });

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(data => setUsers(data));
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleDelete = (id) => {
		setUsers(users.filter(user => user.id !== id));
	};

	const handleAddUser = () => {
		const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
		setUsers([...users, { ...newUser, id }]);
		setNewUser({ name: '', email: '', company: { name: '' } });
	};

	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(search.toLowerCase()) ||
		user.email.toLowerCase().includes(search.toLowerCase()) ||
		user.company.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div style={{ padding: '2rem' }}>
		<h1>사용자 목록</h1>

		{/* 검색창 */}
		<input
			type="text"
			placeholder="검색하세요"
			value={search}
			onChange={handleSearch}
			style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
		/>

		{/* 사용자 추가 폼 */}
		<div style={{ marginBottom: '2rem' }}>
		<h3>새로운 사용자</h3>
		<input
			type="text"
			placeholder="이름"
			value={newUser.name}
			onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
			style={{ marginRight: '0.5rem' }}
		/>
		<input
			type="email"
			placeholder="이메일"
			value={newUser.email}
			onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
			style={{ marginRight: '0.5rem' }}
		/>
		<input
			type="text"
			placeholder="회사" 
			value={newUser.company.name}
			onChange={(e) => setNewUser({ ...newUser, company: { name: e.target.value } })}
			style={{ marginRight: '0.5rem' }}
		/>
		<button onClick={handleAddUser}>Add</button>
		</div>

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
		</div>
	);
};