
function getRandomDelay() {
  return Math.floor(Math.random() * 1500) + 500; 
}

function fetchPlanetData() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const success = Math.random() > 0.3; 
    if (success) {
        resolve({ name: "Mars", size: "6779 km", distance: "225 million km" });
    } else {
        reject("Planet data failed to load.");
    }
    }, getRandomDelay());
});
}

function fetchSatelliteData() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
        resolve({ moons: 2 });
    } else {
        reject("Satellite data failed to load.");
    }
    }, getRandomDelay());
});
}

function fetchExplorationData() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
        resolve({ missions: ["Viking 1", "Viking 2", "Curiosity Rover"] });
    } else {
        reject("Exploration data failed to load.");
    }
    }, getRandomDelay());
});
}

fetchPlanetData()
.then(data => console.log("Planet Data:", data))
.catch(err => console.log(err));

fetchSatelliteData()
.then(data => console.log("Satellite Data:", data))
.catch(err => console.log(err));

fetchExplorationData()
.then(data => console.log("Exploration Data:", data))
.catch(err => console.log(err));