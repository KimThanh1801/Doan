
var momen = [
  {
    id: 1,
    name: 'Ao khoac nu',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/531e21ae9bd92a929471b5a2705d4915.jfif"
  },
  {
    id: 2,
    name: 'Ao khoac nu',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/download (1).jfif"
  },
  {
    id: 3,
    name: 'Ao khoac nu',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/download.jfif"
  },
  {
    id: 4,
    name: 'Ao khoac nu',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/sg-11134201-22090-wlgm6l8xfthva4.jfif"
  }
];

function listProducts() {
  for (let i = 0; i < momen.length; i++) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem;">';
    demo += '<img src="' + momen[i].image + '" class="card-img-top" alt="' + momen[i].name + '">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + momen[i].name + '</h5>';
    demo += '<p class="card-text">ID: ' + momen[i].id + '</p>';
    demo += '<p class="card-text">Code: ' + momen[i].code + '</p>';
    demo += '<p class="card-text">Price: ' + momen[i].price + ' VND</p>';
    demo += '<a href="#" class="btn btn-primary" onclick="Add()">Xem chi tiet</a>';
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';
    document.getElementById("women").innerHTML += demo;
  }
}


var man = [
  {
    id: 5,
    name: 'Ao khoac nam',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/nam1.jfif"
  },
  {
    id: 6,
    name: 'Ao khoac nam',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/nam2.jpg"
  },
  {
    id: 7,
    name: 'Ao khoac nam',
    code: 'TC1025011BA',
    price: '260.000',
    image: "../doan/img/nam3.jfif"
  },
  {
    id: 8,
    name: 'Ao khoac nam',
    code: 'TC1025011BA',
    price: '250.000',
    image: "../doan/img/nam4.jpg"
  }
];

for (let i = 0; i < man.length; i++) {
  var demo = '<div class="col-3">';
  demo += '<div class="card" style="width: 18rem;">';
  demo += '<img src="' + man[i].image + '" class="card-img-top" alt="' + man[i].name + '">';
  demo += '<div class="card-body">';
  demo += '<h5 class="card-title">' + man[i].name + '</h5>';
  demo += '<p class="card-text">ID: ' + man[i].id + '</p>';
  demo += '<p class="card-text">Code: ' + man[i].code + '</p>';
  demo += '<p class="card-text">Price: ' + man[i].price + ' VND</p>';
  demo += '<a href="#" class="btn btn-primary" onclick="Add()">Xem chi tiet</a>';
  demo += '</div>';
  demo += '</div>';
  demo += '</div>';
  document.getElementById("men").innerHTML += demo;
}
//////////////////////////////////////////////////////////////////////
function searchProducts() {
    // Lấy giá trị tìm kiếm
    let searchValue = document.getElementById('search').value.toLowerCase();

    // Dữ liệu sản phẩm
    let allProducts = [
        {
            id: 1,
            name: 'Ao khoac nu',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/531e21ae9bd92a929471b5a2705d4915.jfif",
            category: 'women'
        },
        {
            id: 2,
            name: 'Ao khoac nu',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/download (1).jfif",
            category: 'women'
        },
        {
            id: 3,
            name: 'Ao khoac nu',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/download.jfif",
            category: 'women'
        },
        {
            id: 4,
            name: 'Ao khoac nu',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/sg-11134201-22090-wlgm6l8xfthva4.jfif",
            category: 'women'
        },
        {
            id: 5,
            name: 'Ao khoac nam',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/nam1.jfif",
            category: 'men'
        },
        {
            id: 6,
            name: 'Ao khoac nam',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/nam2.jpg",
            category: 'men'
        },
        {
            id: 7,
            name: 'Ao khoac nam',
            code: 'TC1025011BA',
            price: '260.000',
            image: "../doan/img/nam3.jfif",
            category: 'men'
        },
        {
            id: 8,
            name: 'Ao khoac nam',
            code: 'TC1025011BA',
            price: '250.000',
            image: "../doan/img/nam4.jpg",
            category: 'men'
        }
    ];

    // Lọc sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchValue.trim()) ||
        product.code.toLowerCase().includes(searchValue.trim()) ||
        product.id.toString() === searchValue.trim() ||// Sử dụng so sánh chính xác
        product.price.includes(searchValue.trim()) 
    
    );

    // Xóa các sản phẩm hiện tại trong danh sách để chỉ hiện thị các sản phẩm tìm kiếm
    document.getElementById("women").innerHTML = '';
    document.getElementById("men").innerHTML = '';

    // Hiển thị sản phẩm tìm kiếm
    filteredProducts.forEach(product => {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + product.image + '" class="card-img-top" alt="' + product.name + '">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + product.name + '</h5>';
        demo += '<p class="card-text">ID: ' + product.id + '</p>';
        demo += '<p class="card-text">Code: ' + product.code + '</p>';
        demo += '<p class="card-text">Price: ' + product.price + ' VND</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="Add()">Xem chi tiet</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        // Phân loại sản phẩm theo danh mục
        if (product.category === 'women') {
            document.getElementById("women").innerHTML += demo;
        } else {
            document.getElementById("men").innerHTML += demo;
        }
    });

    // Nếu không có sản phẩm nào, hiển thị thông báo
    if (filteredProducts.length === 0) {
        document.getElementById("women").innerHTML += '<p>No products found.</p>';
        document.getElementById("men").innerHTML += '<p>No products found.</p>';
    }
}