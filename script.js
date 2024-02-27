const menuicn=document.querySelector(".tooglebtn")
const menu=document.querySelector(".menu")
var flag=0;
menuicn.addEventListener("click",function(){
console.log(menu)
   if(flag==0){
    menu.style='top:64px'
    menuicn.innerHTML='<span class="material-symbols-outlined">close</span>'
    flag=1;
   }
   else{
    menu.style='top:-220px'
    menuicn.innerHTML='<span class="material-symbols-outlined">menu_open</span>'
    flag=0;
   }
})
var currVal=1;
var btn = document.querySelector(".btn")
var card = document.querySelectorAll(".card")
var prevbtn = document.querySelector(".prevbtn")
   btn.addEventListener("click", function() {
      if (currVal < 8) {
          card[0].style.transform = `translateX(-${currVal * 150}px)`;
          currVal++;
      }
      else{
        currVal=0;
        card[0].style.transform = `translateX(-${currVal * 150}px)`;
        currVal++;
      }
  });
  
  prevbtn.addEventListener("click", function() {
      if(currVal >1) {
        currVal--;
        card[0].style.transform = `translateX(-${(currVal - 1) * 150}px)`;
     }

     else if(currVal==1){
        card[0].style.transform = `translateX(-${(7) * 150}px)`;
        currVal=8
     }
  });
  var Val=1;
  var card_sec = document.querySelectorAll(".card-sec")
  var nextbtn_sec = document.querySelector(".nextbtn-sec")
  var prevbtn_sec = document.querySelector(".prevbtn-sec")


  nextbtn_sec.addEventListener("click", function() {
    if (Val < 8) {
        card_sec[0].style.transform = `translateX(-${Val * 150}px)`;
        Val++;
    }
    else{
      Val=0;
      card_sec[0].style.transform = `translateX(-${Val * 150}px)`;
      Val++;
    }
});

prevbtn_sec.addEventListener("click", function() {
    if(Val >1) {
      Val--;
      card_sec[0].style.transform = `translateX(-${(Val - 1) * 150}px)`;
   }

   else if(Val==1){
      card_sec[0].style.transform = `translateX(-${(7) * 150}px)`;
      Val=8;
   }
});

var arr = [
    {Name:"Burger",Quantity:"1",Price:"99",imageUrl:"https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {Name:"Pastry",Quantity:"1",Price:"79",imageUrl:"https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {Name:"Pasta",Quantity:"1",Price:"199",imageUrl:"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {Name:"Panner Masala",Quantity:"1",Price:"299",imageUrl:"https://i0.wp.com/ahappytreat.com/wp-content/uploads/2020/07/DSC_0015_1.jpg?w=1920&ssl=1"},
    {Name:"Noodles",Quantity:"1",Price:"129",imageUrl:"https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {Name:"Gulab Jamun",Quantity:"1",Price:"49",imageUrl:"https://images.pexels.com/photos/7449105/pexels-photo-7449105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {Name:"Pav Bhaji",Quantity:"1",Price:"99",imageUrl:"https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {Name:"Samosa",Quantity:"1",Price:"25",imageUrl:"https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg"},
    // New items added below
    {Name:"Pizza",Quantity:"1",Price:"199",imageUrl:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D"},
    {Name:"French Fries",Quantity:"1",Price:"49",imageUrl:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RnJlbmNoJTIwRnJpZXN8ZW58MHx8MHx8fDA%3D"},
    {Name:"Ice Cream",Quantity:"1",Price:"79",imageUrl:"https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEljZSUyMENyZWFtfGVufDB8fDB8fHww"},
    {Name:"Chocolate Cake",Quantity:"1",Price:"149",imageUrl:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hvY29sYXRlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D"},
    {Name:"Salad",Quantity:"1",Price:"69",imageUrl:"https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2FsYWR8ZW58MHx8MHx8fDA%3D"},
    {Name:"Hot Dog",Quantity:"1",Price:"89",imageUrl:"https://images.unsplash.com/photo-1612392061803-38f4c8317f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvdCUyMERvZ3xlbnwwfHwwfHx8MA%3D%3D"},
    {Name:"Cappuccino",Quantity:"1",Price:"59",imageUrl:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D"},
    {Name:"Muffin",Quantity:"1",Price:"39",imageUrl:"https://images.unsplash.com/photo-1606188074044-fcd750f6996a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVmZmlufGVufDB8fDB8fHww"}
];



var cart = JSON.parse(localStorage.getItem('myArray')) || [];
var cartbtn = document.querySelectorAll(".cartbtn");
var p = 0;

function AddToCart() {
    cartbtn.forEach(function (d, index) {
        cartbtn[index].addEventListener("click", function (dets) {
            var itemExists = cart.some(function (item) {
                return item.Name === arr[dets.target.dataset.index].Name;
            });

            if (!itemExists) {
                cart.push(arr[dets.target.dataset.index]);
            }
            else{
              alert('Already Added To Cart')
            }
            localStorage.setItem('myArray', JSON.stringify(cart));
        });
    });
}
AddToCart();

 

  var carticn = document.querySelector("#carticn");
carticn.addEventListener("click",function(d){
    window.location.href = 'cart.html';
})


