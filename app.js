const products = [
    {
        name: 'A02',
        brand: 'Samsung',
        price: 25000,
        category: 'Mobile',
        Image: "./Assest/download.jpeg"
    },
    {
        name: 'A03',
        brand: 'Samsung',
        price: 29000,
        category: 'Mobile' ,
        Image: "./Assest/A03.jpeg"
    },
    {
        name: 'A04',
        brand: 'Samsung',
        price: 32000,
        category: 'Mobile',
          Image: "./Assest/A04.jpeg"
    },
    {
        name: 'A05',
        brand: 'Samsung',
        price: 35000,
        category: 'Mobile',
          Image: "./Assest/A06.jpeg"
    },
    {
        name: 'A06',
        brand: 'Samsung',
        price: 40000,
        category: 'Mobile' ,
          Image: "./Assest/A06.jpeg"
    },
    {

    

        name: '14Pro',
        brand: 'Realme',
        price: 25000,
        category: 'Mobile' ,
         Image: "./Assest/Realme1.jpg"
    },
    {
        name: 'Neo 7',
        brand: 'Realme',
        price: 25000,
        category: 'Mobile' ,
         Image: "./Assest/REalme2.jpg"
    },
    {
        name: 'GT6',
        brand: 'Realme',
        price: 25000,
        category: 'Mobile' ,
         Image: "./Assest/Realme3.jpg"
    },
    {
        name: '12',
        brand: 'Realme',
        price: 25000,
        category: 'Mobile' ,
         Image: "./Assest/Realme4.jpg"
    },
    {
        name: 'Note 50',
        brand: 'Realme',
        price: 25000,
        category: 'Mobile' ,
         Image: "./Assest/Realme5.jpg"
    },
    {
        name: 'Note10',
        brand: 'Techno',
        price: 25000,
        category: 'Mobile' ,
        Image:"./Assest/Techno1.jpeg"
    },
    {
        name: 'Note 20',
        brand: 'Techno',
        price: 25000,
        category: 'Mobile' ,
         Image:"./Assest/Techno2.jpeg"
    },
    {
        name: 'Note 30',
        brand: 'Techno',
        price: 25000,
        category: 'Mobile' ,
         Image:"./Assest/Techno3.jpeg"
    },
    {
        name: 'Note 40',
        brand: 'Techno',
        price: 25000,
        category: 'Mobile' ,
         Image:"./Assest/Techno4.jpeg"
    },
    {
        name: 'Note 50',
        brand: 'Techno',
        price: 25000,
        category: 'Mobile' ,
         Image:"./Assest/Techno5.jpeg"
    },

    {
        name: '11 Pro',
        brand: 'Iphone',
        price: 125000,
        category: 'Mobile' ,
        Image:"./Assest/Iphone1.jpeg"
    },
    {
        name: '12 Pro',
        brand: 'Iphone',
        price: 225000,
        category: 'Mobile' ,
         Image:"./Assest/Iphone2.jpeg"
    },
    {
        name: '13 Pro',
        brand: 'Iphone',
        price: 325000,
        category: 'Mobile' ,
         Image:"./Assest/Iphone3.jpeg"
    },
    {
        name: ' 14 Pro',
        brand: 'Iphone',
        price: 425000,
        category: 'Mobile' ,
         Image:"./Assest/Iphone14.jpeg"
    },
    {
        name: '15Pro',
        brand: 'Iphone',
        price: 525000,
        category: 'Mobile' ,
         Image:"./Assest/Iphone15.jpeg"
    },

];


const div = document.querySelector('.container');


function renderItem(arr) {
    div.innerHTML = ""
    
    
    
    
    arr.map(item => {
        div.innerHTML += `
            <div class = "card">
            <img src = "${item.Image}"  >
            <h3> Name: ${item.name}</h3>
            <h3> Price: ${item.price}</h3>
            <h3> Brand:     ${item.brand}</h3>
            <h3> Category: ${item.category}</h3>
            </div>
        `
    })

}
renderItem(products)


function FilteredItem(category) {
    console.log("Filtering category:", category);
    const filterProduct = products.filter(item => item.brand === category);
    console.log(filterProduct);
    renderItem(filterProduct);
}
