
export async function fetchlog(api) {
try {
const response = await fetch(api);
const contentType = response.headers.get('content-type') || '';
const data = contentType.includes('application/json')
? await response.json()
: await response.text();


console.log('Fetched data from', api);
console.log(data);
} catch (error) {
console.error('Fetch error:', error);
}
}