async function fetchUser() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    console.log("User Names:");
    users.forEach(user => console.log(user.name));
} catch (error) {
    console.error("Error fetching user data:", error);
}
}

fetchUser();



async function fetchError() {
try {
    const response = await fetch('https://invalid-api-link.typicode.com/users');
    
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Custom Error: Unable to fetch data. Please check the API URL or your connection.");
}
}

fetchError();



async function fetchWithRetry(url, retries = 3) {
for (let attempt = 1; attempt <= retries; attempt++) {
    try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Attempt ${attempt}: HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
    } catch (error) {
    console.warn(`Attempt ${attempt} failed:`, error.message);

    if (attempt === retries) {
        throw new Error("Failed to fetch data after multiple attempts.");
    }
    }
}
}

fetchWithRetry('https://jsonplaceholder.typicode.com/posts');




async function fetchSequentialData() {
try {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();

    const firstPost = posts[0];
    console.log("First Post:", firstPost);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`);
    const user = await userResponse.json();

    console.log("Author of First Post:", user.name);
} catch (error) {
    console.error("Error during sequential fetch:", error);
}
}

fetchSequentialData();
