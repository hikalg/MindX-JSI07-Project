function generateHTML(f_product, index) {
    return `
        <li class="">
            <img src="${f_product.img1}"
                alt="Product" class="img-first" />
            <div class="info">
                <span class="brand">${f_product.brand}</span>
                <a href="/pages/product-detail.html?id=${index}"><h5 class="name">${f_product.name}</h5></a>
                <span class="availability">${f_product.availability}</span>
                <span class="price">$${f_product.price}</span>
            </div>
        </li>
    `;
}

function render() {
    products.slice(0, 4).forEach(function (f_product, index) {
        const html = generateHTML(f_product, index);
        const productsList = document.querySelector(".featured-wrapper > ul ");
        productsList.insertAdjacentHTML("beforeend", html);
    });
}

render();
