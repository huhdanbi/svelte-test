import fetchConfig from '$lib/api/fetchConfig'

const baseHeader = {  "Content-Type": "application/json", }

export const getTestList = (payload) => {
    const res = !payload ? `` : payload
    return fetchConfig(baseHeader, 'GET', `https://jsonplaceholder.typicode.com/posts/${res}`);
}