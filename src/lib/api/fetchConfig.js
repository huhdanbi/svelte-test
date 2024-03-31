
export default async function fetchConfig(headers, method, url, payload) {
	const config = {
		headers,
		method,
		body : payload
	}
	
	try {
		return fetch(url, config).then(res => {
			return res.json();
		})
	} catch (e) {
		console.error(e)
	}
}
