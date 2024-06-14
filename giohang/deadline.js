const btn=document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem =event.target
        var product = btnItem.parentElement//lay tất cả thông tin của 1 phần tử cha 
        var productImg=product.querySelector("img").src
        var productTen = product.querySelector("h2").innerText
        var productGia = product.querySelector("span").innerText
        //  console.log(productImg,productTen,productGia)

         addcart(productImg,productTen,productGia)
    }})

})
function addcart(productImg,productTen,productGia)
{
    var addtr = document.createElement('tr')
    var cartitem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartitem.length;i++)
    {
        var productTensp=document.querySelectorAll(".title")
        if(productTensp[i].innerHTML== productTen) 
        {
            alert("sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trContent ='<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productTen+'</span></td><td><span class="Price">'+productGia+'</span><sup>đ</sup></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td class="delete" style="cursor: pointer;"><span class="cart-delete">xoa</span></td></tr>'
    addtr.innerHTML =trContent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deletecart()
    
}
//-----------------------------------total---------------------------------
function carttotal()
{
    
    var cartitem =document.querySelectorAll("tbody tr")
    var sumprice =0;
    // console.log(cartitem)
    for(var i=0;i<cartitem.length;i++)
    {
        var inputValue = cartitem[i].querySelector("input").value
        // console.log(inputValue)
        var productprice = cartitem[i].querySelector(".Price").innerText
        // console.log(productprice)
        var total=(inputValue*productprice*1000)
        // console.log(total)
        sumprice+=total
        //  console.log(sumprice);
    }
    var carttotalA =document.querySelector(".price-total span")
    carttotalA.innerHTML=sumprice.toLocaleString('de-DE')
    // console.log(carttotalA.innerHTML)
    inputchange()
}
//-----------------------------------delete cart---------------------------------
function deletecart()
{
    var cartitem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartitem.length;i++)
    {
        var productdelete=document.querySelectorAll(".cart-delete")
        productdelete[i].addEventListener("click",function(event){
            var cartDelete= event.target
            var cartitem1=cartDelete.parentElement.parentElement
            cartitem1.remove()
            console.log(cartitem1)
            carttotal()
        })
    }
}
function inputchange()
{
    var cartitem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartitem.length;i++)
    {
        var inputvalue=cartitem[i].querySelector("input")
      inputvalue.addEventListener("change",function(){
          carttotal()
      })
    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow=document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0";
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%";
})
