
export default async function FetchURL(headers, method, url, payload) {
	const config = {
		method,
		headers,
		body : payload
	}

	try {
		return fetch(url, config).then(res => {
			if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
			if( method !== 'DELETE' ) return res.json();
		})
	} catch (e) {
		console.error(e)
	}
}
