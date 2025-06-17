import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type { User } from "./User.d.ts";

import { useEffect, useState, useRef } from 'react';

import Search from "./components/Search.tsx";
import NewUser from "./components/NewUser.tsx";
import UserList from "./components/UserList.tsx";

import "./App.css";



export default function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [search, setSearch] = useState('');
	const userCount = useRef(0);

	useEffect(() => {
		(async () => {
			const response = await fetch("https://jsonplaceholder.typicode.com/users");
			const data: User[] = await response.json();

			setUsers(data);
			userCount.current = data.length;
		})();
	}, []);

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearch(e.target.value);
	}

	const handleDelete = (id: number) => {
		setUsers(users.filter(user => user.id !== id));
	}

	const handleAddUser = (newUser: User) => {
		setUsers([...users, { ...newUser, id: ++userCount.current }]);
	}

	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(search.toLowerCase()) ||
		user.email.toLowerCase().includes(search.toLowerCase()) ||
		user.company.name.toLowerCase().includes(search.toLowerCase())
	);


	return (
		<>
			<Search handleSearch={handleSearch}/>

			<NewUser handleAddUser={handleAddUser}/>

			<UserList
				filteredUsers={filteredUsers}
				handleDelete={handleDelete}
			/>
		</>
	);
};