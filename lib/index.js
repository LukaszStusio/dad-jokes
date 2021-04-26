import { endpointUrl } from './elements.js'
// Named export - we can have lots of these
export async function fetchJoke() {
    const response = await fetch(endpointUrl, {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await response.json();
    // console.log(data);
    return data;
};