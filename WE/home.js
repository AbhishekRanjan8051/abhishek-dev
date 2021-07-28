




function slideshow() {
  const arr = [
    "https://media.timeout.com/images/105240189/image.jpg",
    "https://pix10.agoda.net/hotelImages/4869553/0/35b103e869655a2959fac36f614fa08e.jpg?s=1024x768",
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/17/Pictures/_cf8f7c16-090a-11ea-8da7-95ed4a38ab68.jpg",
  ];

  let div = document.getElementById("slideshow");
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
  }, 3000);
}

slideshow();


const students = [
    
    {
    name: "abhishek",
        attandance: 99,
        img = "https://www.blexar.com/avatar.png"
            
        
    },
    {
        name: "rambhu",
            attandance: 99,
            img = "https://www.blexar.com/avatar.png"
                
            
        },
       
]

    localStorage.setItem("students",JSON.stringify(students));


function showStudents() {
    let students = JSON.parse(localStorage.getItem(students))


    let students_div= document.getElementById("students")

    students.forEach(function (el) {
        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerHTML = el.name;

        let p_attandance = document.createElement("p");
        p_attandance.innerHTML = `${el.attandance}`;

        let img = document.createElement("img")
        img.src = el.img;

        div.append(img, p_name, p_attandance)
        
        students_div.append(div)

    })

}

showStudents() 

























