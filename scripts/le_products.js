const le_product_0 = {
    name: "iPhone 14 Pro Max Christmas LE Red",
    brand: "Apple",
    id: 100, // mã sản phẩm
    color: "red",
    availability: "Limited+ (25)", // còn hàng hay không
    desc1: "256GB", // mô tả chung
    img1: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    img2: "https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg",
    price: "$" + 1299
}

const le_product_1 = {
    name: "PlayStation 5 Christmas LE",
    brand: "Sony",
    id: 101, // mã sản phẩm
    color: "red / green",
    availability: "Limited+ (10)", // còn hàng hay không
    desc1: "Disc Edition", // mô tả chung
    img1: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
    img2: "https://hanoicomputercdn.com/media/product/56779_may_choi_game_sony_playstation_5_standard_0002_3.jpg",
    price: "$" + 999
}

const le_product_2 = {
    name: "ASUS ROG Zephyrus G14 Fusion Edition GA402RK-FS",
    brand: "ASUS",
    id: 102, // mã sản phẩm
    color: "black / white",
    availability: "Limited (100)", // còn hàng hay không
    desc1: '14" ROG Nebula Display, 120hz AdaptiveSync, 16:10, Ryzen 9 6900HS, RX 6800S, 32GB DDR5 RAM, 1TB PCIe 4 NVMe SSD', // mô tả chung
    img1: "https://www.excaliberpc.com/images/777255_3/large.jpg",
    img2: "https://anphat.com.vn/media/product/41932_laptop_asus_rog_zephyrus_g14_g14_ga402rk_l8072w__5_.jpg",
    price: "$" + 1799
}

const le_product_3 = {
    name: "RTX 4090 FE Christmas RGB",
    brand: "Nvidia",
    id: 103,
    color: "black",
    availability: "Limited (10)",
    desc1: "with OpenRGB support",
    img1: "https://bizweb.dktcdn.net/100/344/851/products/1-e93f1425-c40c-4600-a1bb-fad13b8dbede.jpg?v=1663732034697",
    img2: "https://bizweb.dktcdn.net/100/344/851/products/1-e93f1425-c40c-4600-a1bb-fad13b8dbede.jpg?v=1663732034697",
    price: "$" + 2099
}

const le_product_4 = {
    name: "Galaxy Z Flip4 Christmas Bespoke",
    brand: "Samsung",
    id: 104,
    color: "red / green / black",
    availability: "Limited (100)",
    desc1: " ",
    img1: "https://images.samsung.com/ph/smartphones/galaxy-z-flip4/buy/Flip4_Carousel_ProductKV_BoraPurple_MO.jpg",
    img2: "https://www.xtmobile.vn/vnt_upload/product/08_2022/thumbs/(600x600)_crop_samsung-galaxy-z-flip-4-8gb-128gb.jpg",
    price: "$" + 1099
}


const le_products = [le_product_0, le_product_1, le_product_2, le_product_3, le_product_4]

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
        <span class="price">${le_product.price}</span>
      </div>
    </div>
  </li>
            `;
}

function render() {
    le_products.forEach(function (le_product, index) {
        const html = generateHTML(le_product, index);
        const productsList = document.querySelector("ul#le-products");
        productsList.insertAdjacentHTML(
            "beforeend", html
        );
    });
}

render();

