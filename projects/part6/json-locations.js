// Fetches the Google Maps Embed URL based on latitude and longitude
const getMap = async (latitude, longitude) => {
    try {
        return (
            await fetch(
                `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
            )
        ).url;
    } catch (error) {
        console.log(error);
    }
};

// Fetches the list of restaurants from the JSON file
const getRestaurants = async () => {
    const url = "https://raw.githubusercontent.com/lordjr05/lordjr05.github.io/refs/heads/main/projects/part6/locations.json";  // Replace with your GitHub JSON URL
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

// Displays the restaurants dynamically
const showRestaurants = async () => {
    const restaurantsSection = document.getElementById("restaurants"); // The section where you want to display restaurant info
    const restaurants = await getRestaurants();

    restaurants.forEach(async (restaurant) => {
        const section = document.createElement("section");
        section.classList.add("restaurant");
        restaurantsSection.append(section);

        // Add the restaurant image
        const img = document.createElement("img");
        img.src = restaurant.img_name;  // Image from the images folder
        img.alt = restaurant.name;
        section.append(img);

        // Add a link to the restaurant's website (assuming you add a website URL)
        const a = document.createElement("a");
        a.href = "#";  // Replace with actual website URL if available
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = restaurant.name;
        a.append(h3);

        const pAddress = document.createElement("p");
        pAddress.innerHTML = `<strong>Address:</strong> ${restaurant.address}`;
        section.append(pAddress);

        const pPhone = document.createElement("p");
        pPhone.innerHTML = `<strong>Phone:</strong> ${restaurant.phone}`;
        section.append(pPhone);

        // Add the Google Map iframe
        const iframe = document.createElement("iframe");
        iframe.src = await getMap(restaurant.latitude, restaurant.longitude);
        section.append(iframe);
    });
};

// Call the showRestaurants function to display them on the page
showRestaurants();
