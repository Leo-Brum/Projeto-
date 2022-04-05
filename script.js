let products = { 
    data: [
        {
        productName: "Mystery",
        category: "Mystery",
        price: '25',
        image: 'Detective and Mystery.jpeg',
    },
    {
        productName: "Fantasy",
        category: "Fantasy",
        price: '30',
        image: 'Fantasy.jpeg',
    },

{
    productName: "Adventure",
    category: "Adventure",
    price: '20',
    image: 'Action and Adventure.jpeg',
},
{
    productName: "Science",
    category: "Science",
    price: '27',
    image: 'Science Fiction.jpeg',
},
],
};

for(let i of products.data){
    //Create Card
    let card = document.createElement("div")
    //Card should have categotry and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container 
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from buttom (Parameter same as category)
function filterProduct(value){
    // button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove('active')
        }
    })
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on "all" button click
        if (value == 'all') {
            element.classList.remove("hide");
        } else {
            //check if element contains category class
            if (element.classList.contains(value)) {
                //dispplay element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide")
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    //loop through all elements 
    elements.forEach((element, index) => {
        //check of text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove('hide');
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    })
})

window.onload = () => {
    filterProduct("all")
}