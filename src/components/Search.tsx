import type { ChangeEventHandler } from 'react';

import { useState } from 'react';



interface Props {
	handleSearch: ChangeEventHandler<HTMLInputElement>;
}

export default function Search({ handleSearch }: Props) {
	const [search, setSearch] = useState('');


	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearch(e.target.value);
		handleSearch(e);
	}

	
	return (
		<>
			<h1>사용자 목록</h1>
			
			<input
				type="text"
				placeholder="검색하세요"
				value={search}
				onChange={onChange}
				style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
			/>
		</>
	);
}