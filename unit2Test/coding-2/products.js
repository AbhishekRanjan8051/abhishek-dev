function slide() {
  const arr = [
    "https://i.pinimg.com/originals/76/69/7e/76697ed321e785eff4fee7ec0c828066.png",
    "https://i.pinimg.com/originals/ce/8a/3c/ce8a3c2ad1265ba21cdeb2f2a6ddd0a1.jpg",
  ];

  let div = document.getElementById("slide");

  let img = document.createElement("img");

  let i = 0;
  img.src = arr[0];

  div.append(img);

  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    img.src = arr[i];
    i++;
  }, 10000);
}
slide();

const jewelry = [
  {
    name: "Utsav",
    price: "100000",
    brand: "Tansiq",
    image:
      "https://i.pinimg.com/originals/76/69/7e/76697ed321e785eff4fee7ec0c828066.png",
  },

  {
    name: "Temple",
    price: "90000",
    brand: "Tanisq",
    image:
      "https://i.pinimg.com/originals/ce/8a/3c/ce8a3c2ad1265ba21cdeb2f2a6ddd0a1.jpg",
  },

  {
    name: "Jumkha",
    price: "40000",
    brand: "Tansiq",
    image:
      "https://i.pinimg.com/originals/b6/c4/c0/b6c4c071450a89d194db80b9550c71c0.jpg",
  },

  {
    name: "Choker Neckleace",
    price: "150000",
    brand: "PC Jweller",
    image:
      "https://i.pinimg.com/originals/29/ef/90/29ef900e0415646c9cc2551dc408a354.jpg",
  },

  {
    name: "Beirhand ring",
    price: "30000",
    brand: "PC Jweller",
    image:
      "https://img.tatacliq.com/images/i4/437Wx649H/MP000000003841990_437Wx649H_20181026155020.jpeg",
  },

  {
    name: "Winter Bridal Jwellery",
    price: "350000",
    brand: "PC Jweller",
    image:
      "https://i.pinimg.com/originals/36/59/e4/3659e46a240ee2fd46105d6fef563925.jpg",
  },
];

if (localStorage.getItem("jewelary") == null) {
  localStorage.setItem("jewelary", JSON.stringify(jewelry));
}

function showJwe(data) {
  let jwe = data;

  let jwediv = document.getElementById("jewelary");

  jwediv.innerHTML = null;

  jwe.forEach(function (el) {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerText = el.name;

    let p_price = document.createElement("p");
    p_price.innerText = el.price;

    let p_brand = document.createElement("p");
    p_brand.innerText = el.brand;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";

    btn.addEventListener("click", function () {
      addtoCart(el);
    });

    btn.style.display = "block";

    let image = document.createElement("img");
    image.src = el.image;

    div.append(image, p_name, p_brand, p_price,btn);

    jwediv.append(div);
  });
}

showJwe(JSON.parse(localStorage.getItem("jewelary")));

function sortLH() {
  let jewelary = JSON.parse(localStorage.getItem("jewelary"));

  jewelary = jewelary.sort(function (a, b) {
    return a.price - b.price;
  });
  showJwe(jewelary);
}

function sortHL() {
  let jewelary = JSON.parse(localStorage.getItem("jewelary"));

  jewelary = jewelary.sort(function (a, b) {
    return b.price - a.price;
  });
  showJwe(jewelary);
}
