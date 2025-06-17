import type { User } from "../User.d.ts";

import { useState } from 'react';



interface Props {
	handleAddUser: (newUser: User) => void;
}

export default function NewUser({ handleAddUser }: Props) {
	const [newUser, setNewUser] = useState<User>({
		id: -1,
		name: '',
		email: '',
		company: {
			name: ''
		}
	});

	const onChange = (target: keyof User, value: any) => {
		if (target === "email") {
		}

		setNewUser({
			...newUser,
			[target]: value
		});
	}
	const onClick = () => {
		if (!newUser.name.trim() || !newUser.email.trim() || !newUser.company.name.trim()) {
			alert("모든 필드를 채워주세요.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email)) {
			alert("유효한 이메일 주소를 입력하세요.");
			return;
		}


		handleAddUser(newUser);
	}


	return (
		<>
			<h3>새로운 사용자</h3>
			<input
				type="text"
				placeholder="이름"
				value={newUser.name}
				onChange={(e) => onChange('name', e.target.value)}
				style={{ marginRight: '0.5rem' }}
			/>
			<input
				type="email"
				placeholder="이메일"
				value={newUser.email}
				onChange={(e) => onChange('email', e.target.value)}
				style={{ marginRight: '0.5rem' }}
			/>
			<input
				type="text"
				placeholder="회사"
				value={newUser.company.name}
				onChange={(e) => onChange('company', { name: e.target.value })}
				style={{ marginRight: '0.5rem' }}
			/>
			<button onClick={onClick}>
				Add
			</button>
		</>
	);
}