// Define menu item data
const menuItems = [
    { id: 1, name: "Buffalo Chicken Dip", image: "images/BCD.jpg", description: "Creamy buffalo dip with a kick!", price: "$7.99" },
    { id: 2, name: "Bread Service", image: "images/bread.jpeg", description: "Freshly baked bread with dipping sauce.", price: "$3.99" },
    { id: 3, name: "Spring Rolls", image: "images/spring roll.webp", description: "Crispy and flavorful spring rolls.", price: "$5.99" },
    { id: 4, name: "Signature Wings", image: "images/wings.jpeg", description: "Wings in our signature sauce.", price: "$9.99" },
    { id: 5, name: "Filet Mignon", image: "images/filet.jpeg", description: "Perfectly grilled filet mignon.", price: "$24.99" },
    { id: 6, name: "Pasta Piccata", image: "images/pasta.jpeg", description: "Pasta with a tangy lemon butter sauce.", price: "$15.99" },
    { id: 7, name: "Crab Cakes", image: "images/crab.jpeg", description: "Delicious crab cakes served with aioli.", price: "$18.99" },
    { id: 8, name: "Shrimp Pasta", image: "images/shrimp.webp", description: "Shrimp in a creamy garlic sauce.", price: "$16.99" },
    { id: 9, name: "Key Lime Pie", image: "images/pie.jpg", description: "Tart and refreshing key lime pie.", price: "$6.99" },
    { id: 10, name: "Chocolate Cake", image: "images/chocolate.jpeg", description: "Decadent chocolate cake with frosting.", price: "$7.99" },
    { id: 11, name: "Cheesecake", image: "images/cheesecake.jpg", description: "Creamy cheesecake with a graham cracker crust.", price: "$8.99" },
    { id: 12, name: "Cannoli", image: "images/cannoli.jpeg", description: "Crispy pastry filled with ricotta cheese.", price: "$5.99" },
];

// Function to open the modal with item data
function showModal(id) {
    const item = menuItems.find(i => i.id === id);
    const modal = document.getElementById("menu-modal");
    const modalImage = modal.querySelector("img");
    const modalTitle = modal.querySelector("h2");
    const modalDescription = modal.querySelector(".menu-description");
    const modalPrice = modal.querySelector(".menu-price");

    modalImage.src = item.image;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = `Price: ${item.price}`;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("menu-modal");
    modal.style.display = "none";
}

// Add event listener for grid items
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const id = parseInt(item.getAttribute('data-id'));
        showModal(id);
    });
});
