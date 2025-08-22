// 1. Get country name from URL
const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");

// 2. Country → YouTube URL mapping
const videos = {
    "Georgia": "https://www.youtube.com/watch?v=2t6gVLNCm44",
    "France": "https://www.youtube.com/watch?v=abcd1234xyz",
    "Japan": "https://www.youtube.com/watch?v=URDXZSJZ2ME"
};

// 3. Update title
document.getElementById("title").textContent = countryName;

// 4. Embed the correct video
const iframe = document.getElementById("factVideo");
if (videos[countryName]) {

    // Convert normal YouTube link to embed format
    const videoId = new URL(videos[countryName]).searchParams.get("v");
    iframe.src = 'https://www.youtube.com/embed/${videoId}?autoplay=1';
} 
else {
    document.body.innerHTML = <h1 style="color:white;">No video available for ${countryName}</h1>;
}