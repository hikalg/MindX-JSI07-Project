const fs_product_0 = {
    name: "iPhone 14 Pro Max Christmas LE Red",
    brand: "Apple",
    id: 100, // mã sản phẩm
    color: "red",
    availability: "Limited+ (25)", // còn hàng hay không
    desc1: "256GB", // mô tả chung
    img1: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    img2: "https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg",
    price: "$" + 1,
};

const fs_product_1 = {
    name: "PlayStation 5 Christmas LE",
    brand: "Sony",
    id: 101, // mã sản phẩm
    color: "red / green",
    availability: "Limited+ (10)", // còn hàng hay không
    desc1: "Disc Edition", // mô tả chung
    img1: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
    img2: "https://hanoicomputercdn.com/media/product/56779_may_choi_game_sony_playstation_5_standard_0002_3.jpg",
    price: "$" + 1,
};

const fs_product_2 = {
    name: "ASUS ROG Zephyrus G14 Fusion Edition GA402RK-FS",
    brand: "ASUS",
    id: 102, // mã sản phẩm
    color: "black / white",
    availability: "Limited (100)", // còn hàng hay không
    desc1: '14" ROG Nebula Display, 120hz AdaptiveSync, 16:10, Ryzen 9 6900HS, RX 6800S, 32GB DDR5 RAM, 1TB PCIe 4 NVMe SSD', // mô tả chung
    img1: "https://www.excaliberpc.com/images/777255_3/large.jpg",
    img2: "https://anphat.com.vn/media/product/41932_laptop_asus_rog_zephyrus_g14_g14_ga402rk_l8072w__5_.jpg",
    price: "$" + 1,
};

const fs_product_3 = {
    name: "RTX 4090 FE Christmas RGB",
    brand: "Nvidia",
    id: 103,
    color: "black",
    availability: "Limited (10)",
    desc1: "with OpenRGB support",
    img1: "https://bizweb.dktcdn.net/100/344/851/products/1-e93f1425-c40c-4600-a1bb-fad13b8dbede.jpg?v=1663732034697",
    img2: "https://bizweb.dktcdn.net/100/344/851/products/1-e93f1425-c40c-4600-a1bb-fad13b8dbede.jpg?v=1663732034697",
    price: "$" + 1,
};

const fs_product_4 = {
    name: "Galaxy Z Flip4 Christmas Bespoke",
    brand: "Samsung",
    id: 104,
    color: "red / green / black",
    availability: "Limited (100)",
    desc1: " ",
    img1: "https://www.didongmy.com/vnt_upload/product/08_2022/thumbs/(600x600)_Z_Fold_4_Green_Gray_640x640_didongmy_2.png",
    img2: "https://www.xtmobile.vn/vnt_upload/product/08_2022/thumbs/(600x600)_crop_samsung-galaxy-z-flip-4-8gb-128gb.jpg",
    price: "$" + 1,
};

const fs_products = [
    fs_product_0,
    fs_product_1,
    fs_product_2,
    fs_product_3,
    fs_product_4,
];

function generateHTML(fs_product) {
    return `
    <li class="le-product">
    <div class="img-wrapper">
      <span>LIMITED QUANTITY</span>
      <img src="${fs_product.img1}" alt="Product" class="img-first" />
      <img src="${fs_product.img2}" alt="ProductAlt" class="img-second" />
      <div class="info">
        <span class="brand">${fs_product.brand}</span>
        <h2 class="name">${fs_product.name}</h2>
        <span class="availability">${fs_product.availability}</span>
        <span class="price">${fs_product.price}</span>
      </div>
    </div>
  </li>
            `;
}

function render() {
    fs_products.forEach(function (fs_product) {
        const html = generateHTML(fs_product);
        const productsList = document.querySelector("ul#fs-products");
        productsList.insertAdjacentHTML("beforeend", html);
    });
}

render();
