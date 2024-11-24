
let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  cartTotal += price;
  document.getElementById('cart-count').textContent = cart.length;
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);

  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

  const orderSummary = document.getElementById('order-summary');
  orderSummary.style.display = 'block';

  const orderList = document.getElementById('order-list');
  const listItem = document.createElement('li');
  listItem.textContent = `${name} - $${price.toFixed(2)}`;
  orderList.appendChild(listItem);
}
