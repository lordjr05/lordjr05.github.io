class Pizza {
    constructor(name, image, description, price, ingredients, feature) {
      this.name = name;
      this.image = image;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.feature = feature;
    }
  
    getSection() {
      return `
        <div class="pizza-box" onclick="showModal('${this.name}')">
          <h3>${this.name}</h3>
          <img src="images/${this.image}" alt="${this.name}">
        </div>
      `;
    }
  }
  
  // Array of pizza objects
  const pizzas = [
    new Pizza('Margherita', 'margherita.jpg', 'Classic pizza with fresh mozzarella and basil.', 10.99, 'Mozzarella, Basil, Tomato', 'Vegetarian'),
    new Pizza('Pepperoni', 'pepperoni.jpg', 'Delicious pizza topped with crispy pepperoni slices.', 12.99, 'Pepperoni, Mozzarella, Tomato', 'Spicy'),
    new Pizza('BBQ Chicken', 'bbq_chicken.jpg', 'BBQ chicken with tangy sauce and mozzarella cheese.', 13.99, 'Chicken, BBQ Sauce, Mozzarella', 'Grilled'),
    new Pizza('Hawaiian', 'hawaiian.jpg', 'Tropical pizza with ham and pineapple.', 11.99, 'Ham, Pineapple, Mozzarella', 'Sweet and Savory'),
    new Pizza('Veggie Supreme', 'veggie_supreme.jpg', 'A variety of fresh veggies on a tomato base.', 11.49, 'Peppers, Mushrooms, Olives, Onion', 'Vegetarian'),
  ];
  
  // Render pizzas
  const pizzaContainer = document.getElementById('pizzaContainer');
  pizzas.forEach(pizza => {
    pizzaContainer.innerHTML += pizza.getSection();
  });
  
  // Modal handling
  function showModal(pizzaName) {
    const pizza = pizzas.find(pizza => pizza.name === pizzaName);
    if (pizza) {
      document.getElementById('pizzaTitle').innerText = pizza.name;
      document.getElementById('pizzaImage').src = `images/${pizza.image}`;
      document.getElementById('pizzaDescription').innerText = pizza.description;
      document.getElementById('pizzaPrice').innerText = pizza.price;
      document.getElementById('pizzaIngredients').innerText = pizza.ingredients;
      document.getElementById('pizzaFeature').innerText = pizza.feature;
  
      const modal = document.getElementById('pizzaModal');
      modal.style.display = 'block';
      
      // Animation for pizza image
      const pizzaImage = document.getElementById('pizzaImage');
      pizzaImage.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        pizzaImage.style.transition = 'transform 1s ease-in-out';
        pizzaImage.style.transform = 'rotate(0deg)';
      }, 500);
    }
  }
  
  function closeModal() {
    const modal = document.getElementById('pizzaModal');
    modal.style.display = 'none';
  }
  