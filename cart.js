const product = [
    {
        id: 0,
        image : 'https://m.media-amazon.com/images/I/719RiDAGXtL._SL1500_.jpg',
        title: 'Smart Watch1',
        price: 10,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/61JtVmcxb0L._SL1080_.jpg',
        title: 'Smart Watch2',
        price: 20,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/61QMdK2FrXL._SL1500_.jpg',
        title: 'GW 57',
        price: 30,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/618qhNo1BOL._SL1000_.jpg',
        title: 'Smart Watch4',
        price: 40,
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/61OzNoKjo9L._SX679_.jpg',
        title: 'Smart Watch5',
        price: 50,
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/61HWdCh-5lL._SX679_.jpg',
        title: 'Smart Watch6',
        price: 60,
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/61Dev97U-8L._SX679_.jpg',
        title: 'Smart Watch7',
        price: 70,
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/71wN2e+2VWL._SX679_.jpg',
        title: 'Smart Watch8',
        price: 80,
    },
];
const categories = [...new Set(product.map((item)=>{return item}))]
    document.getElementById('searchBar').addEventListener('keyup', (e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});
let i=0;
const displayItem = (items)=>{
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, price} = item;
        return(
            `<div class="box">
                 <div class="img-box">
                    <a href="product page1.html"><img class= 'images' src="${image}"></img></a>
                 </div>
                <div class="left">
                   <p>${title}</p>
                   <h2>$ ${price}.00</h2>`+
                   "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
                `</div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML= "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML= cart.map((item)=>
        {
            var{image, title, price} = item;
            total= total+price;
            document.getElementById("total").innerHTML= "$ "+total+".00";
            return( 
                `<div class= 'cart-item'>
                     <div class="row-img">
                        <img class='rowimg' src="${image}"></img>
                     </div>
                         <p style='font-size:12px;'>${title}</p>
                         <h2 style='font-size:12px;'>$ ${price}.00</h2>`+
                        "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
const form = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

    }
}



