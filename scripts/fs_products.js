function generateHTML(fs_product, index) {
    return `
    <li class="le-product">
    <div class="img-wrapper">
      <span>LIMITED QUANTITY</span>
      <img src="${fs_product.img1}" alt="Product" class="img-first" />
      <img src="${fs_product.img2}" alt="ProductAlt" class="img-second" />
      <div class="info">
        <span class="brand">${fs_product.brand}</span>
        <a href="/pages/product-detail.html?id=${index}"><h2 class="name">${fs_product.name}</h2></a>
        <span class="availability">${fs_product.availability}</span>
        <span class="price">$${fs_product.price}</span>
      </div>
    </div>
  </li>
            `;
}

function render() {
    products.forEach(function (fs_product, index) {
        const html = generateHTML(fs_product, index);
        const productsList = document.querySelector("ul#fs-products");
        productsList.insertAdjacentHTML("beforeend", html);
    });
}

render();
