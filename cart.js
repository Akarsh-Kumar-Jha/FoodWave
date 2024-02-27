var clutter=""
var cart = JSON.parse(localStorage.getItem('myArray'));
var closebtn = document.querySelector("#closebtn");
var popup = document.querySelector("#PopUp")
if(cart.length==0){
  popup.style.transition = 'all 1s ease-in-out';
  popup.style.display='flex';
  closebtn.addEventListener("click",function(){
    window.location.href = 'index.html'
  })
}
else{
function CartAdd(){
  cart.forEach(function(dets,index){
    clutter += ` <div class="disp text-wrap w-\[90\%\] bg-white shadow-2xl py-2 mt-8 rounded-lg flex flex-row justify-between items-center px-1">
    <img class=" shadow-lg h-10 w-10 rounded-lg md:h-24 md:w-24" src="${dets.imageUrl}" alt="">
    <p class="font-semibold text-orange-500 md:font-bold md:text-2xl">${dets.Name}</p>
<div class="flex flex-row justify-center items-center gap-1">
<p class=" font-semibold text-sm text-wrap md:text-xl">qt:<span class="qshow" >${dets.Quantity}</p>
</span> <button class="dec p-1 border-2 border-gray-400 rounded text-[10px] md:text-[20px] h-[30px] w-[18px] md:h-[40px] md:w-[22px]">-</button> <button class=" inc ml-[1px] p-1 border-2 border-gray-400 rounded text-[10px] md:text-[15px] h-[30px] w-[18px] md:h-[40px] md:w-[22px]">+</button>
</div>
 <div class="flex flex-row justify-center items-center pshow text-[12px] text-gray-500" >
 <p class="font-semibold ml-2 mr-1 text-[12px] md:text-[20px] text-gray-500">Price:&#x20b9;</p>
<p class="text-black text-[12px] md:text-[20px]" >${dets.Price}</p>

 </div>
 <span data-num="${index}" class="material-symbols-outlined md:text-3xl text-red-500 hover:text-red-700 cursor-pointer delt">
delete
</span>

</div>`
})



}
CartAdd();


var show = document.querySelector('.show')

show.innerHTML=clutter


var p_show = document.querySelectorAll('.pshow')

console.log(p_show)

var inc = document.querySelectorAll('.inc')
var dec = document.querySelectorAll('.dec')

var qshow = document.querySelectorAll('.qshow');

var tamount=0;
cart.forEach(function(dets){
tamount += parseInt(dets.Price);
})

cart.forEach(function(dets,index){
    inc[index].addEventListener("click",function(){
        console.log(dets.Quantity)
        dets.Quantity = parseInt(dets.Quantity) + 1
        console.log("clicked")
        qshow[index].innerHTML=`${dets.Quantity}`
        tamount +=parseInt(dets.Price)
        p_show[index].innerHTML=`<p class="font-semibold ml-2 mr-1 md:text-[20px]">Price:&#x20b9;${dets.Price*parseInt(dets.Quantity)}</p>`
        total.innerHTML=`<p class="text-xl font-semibold md:font-bold md:text-2xl ">Your Total Amount Is:- &#x20b9; <span class="text-orange-500 md:text-2xl"> ${tamount} </span> </p>`
    
    })
})

cart.forEach(function(dets,index){
    dec[index].addEventListener("click",function(){
        if(dets.Quantity<=1){
            alert('Minimum One Is Required')
        }
        else{
            dets.Quantity = parseInt(dets.Quantity) - 1
            console.log("clicked")
            qshow[index].innerHTML=`${dets.Quantity}`
            tamount -=parseInt(dets.Price)
            p_show[index].innerHTML=`<p class="font-semibold ml-2 mr-1 md:text-2xl">Price:&#x20b9;${dets.Price*parseInt(dets.Quantity)}</p>`
            total.innerHTML= `<p class="text-xl font-semibold md:font-bold md:text-2xl ">Your Total Amount Is:- &#x20b9; <span class=text-orange-500 md:text-2xl"> ${tamount} </span> </p>`
        }

    })
})



var total = document.querySelector('.total')


total.innerHTML=    `<p class="text-xl font-semibold md:font-bold md:text-2xl ">Your Total Amount Is:- &#x20b9; <span class="text-orange-500 md:text-2xl"> ${tamount} </span> </p>`


var flag;
var inpt = document.querySelector('.inpt')
inpt.addEventListener("input",function(){
flag=inpt.value;
})

var fg=0;
var cshow = document.querySelector('.cshow')
var Apply = document.querySelector('.Apply')
var bln = document.querySelector('.bln')
const jsConfetti = new JSConfetti()
Apply.addEventListener("click",function(){
  if(flag=="Akarsh50" && fg==0){
    jsConfetti.addConfetti()
cshow.innerHTML= `<p class="text-green-500" >Congratulations 50% Off Applied</p>`
tamount=(tamount/2);
total.innerHTML= `<p class="text-xl font-semibold md:font-bold md:text-2xl"> Your Total Amount Is:- &#x20b9; <span class="text-orange-500 md:text-2xl"> ${tamount} </span> </p>`
fg=1;
  }

  else if(fg==1){
    cshow.innerHTML= `<b class=" text-red-400 md:text-2xl" >Already Applied</b>`
  }
  else{
    cshow.innerHTML= `<b class=" text-red-400 md:text-2xl" >Invalid Coupon Code</b>`
  }




})
var delt = document.querySelectorAll(".delt");
var disp = document.querySelectorAll(".disp");

function removeFromCart(itemName) {
  cart = cart.filter(function(item) {
      return item.Name !== itemName.Name || location.reload();
  });
  // Update localStorage after removing item from the cart
  localStorage.setItem('myArray', JSON.stringify(cart));
}
delt.forEach(function(dels){
  dels.addEventListener("click",function(dets){
    var dispElement = dels.getAttribute('data-num');
    var displ = dels.closest(".disp");
    removeFromCart(cart[dispElement]);
    if (displ) {
      displ.remove();
  }

  var s_amount = 0;
  JSON.parse(localStorage.getItem('myArray')).forEach(function(dets,index){
console.log(dets.Price)
console.log(s_amount)
 s_amount = parseInt(s_amount) +  parseInt(dets.Price)
 console.log(s_amount)
 total.innerHTML= `<p class="text-xl font-semibold md:font-bold md:text-2xl ">Your Total Amount Is:- &#x20b9; <span class=text-orange-500 md:text-2xl"> ${s_amount} </span> </p>`
  })

  if(cart.length==0){
    popup.style.display='flex';
    closebtn.addEventListener("click",function(){
      window.location.href = 'index.html'
    })
  }
  
  })
})



}