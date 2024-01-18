import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/dnava24')
	// 		.then((res) => res.json())
	// 		.then(data => {
	// 			console.log(data)
	// 			setData(data)
	// 		})
	// }, [])

	const data = useLoaderData();

	return (
		<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
			Github : {data.name}
			<img className='' src={data.avatar_url} width='200' alt='' />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/dnava24');
	return response.json();
};
