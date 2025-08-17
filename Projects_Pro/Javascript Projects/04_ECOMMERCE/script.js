document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const checkoutBtn = document.getElementById("checkout-btn");
  const totalPriceMsg = document.getElementById("total-price");
  const cartTotal = document.getElementById("cart-total");

  const products = [
    { id: 1, name: "Mango", price: 10.99 },
    { id: 2, name: "Apple", price: 20.99 },
    { id: 3, name: "Avacado", price: 30.0 },
  ];

  let cart = JSON.parse(localStorage.getItem("item")) || [];
  renderCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.id} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add To Cart</button>
    <button data-remove-id="${product.id}">Remove</button>
    `;

    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const removeId = parseInt(e.target.getAttribute("data-remove-id"));

      if (productId) {
        const product = products.find((p) => p.id === productId);
        addToCart(product);
      }

      if (removeId) {
        removeFromCart(removeId);
      }
    }
  });

  function addToCart(product) {
    cart.push(product);
    console.log(cart);
    renderCart();
    localStorageMethod();
  }

  function removeFromCart(id) {
    cart = cart.filter((p) => p.id !== id);
    renderCart();
    localStorageMethod();
  }

  function renderCart() {
    cartList.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cartList");
        cartItem.innerHTML = `${item.id}. ${item.name} - $${item.price.toFixed(
          2
        )}`;
        cartList.appendChild(cartItem);

        localStorageMethod();
      });
      totalPriceMsg.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCart.classList.remove("hidden");
      cartTotal.classList.add("hidden");
      totalPriceMsg.textContent = `$0.00`;
    }

    localStorageMethod();
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart();
    localStorageMethod();
  });

  function localStorageMethod() {
    localStorage.setItem("item", JSON.stringify(cart));
  }
});
