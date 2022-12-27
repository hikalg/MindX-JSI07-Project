function generateHTML(le_product, index) {
    return `
    <li class="le-product">
    <div class="img-wrapper">
      <span>LIMITED QUANTITY</span>
      <img src="${le_product.img1}" alt="Product" class="img-first" />
      <img src="${le_product.img2}" alt="ProductAlt" class="img-second" />
      <div class="info">
        <span class="brand">${le_product.brand}</span>
        <a href="/pages/product-detail.html?id=${index}"><h2 class="name">${le_product.name}</h2></a>
        <span class="availability">${le_product.availability}</span>
        <span class="price">$${le_product.price}</span>
      </div>
    </div>
  </li>
            `;
}

function render() {
    products.forEach(function (le_product, index) {
        const html = generateHTML(le_product, index);
        const productsList = document.querySelector("ul#le-products");
        productsList.insertAdjacentHTML("beforeend", html);
    });
}

render();
