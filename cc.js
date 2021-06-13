let storage = localStorage.getItem(0);

let storageValue = JSON.parse(storage);

let storageQuantity = storageValue.quantity;
let storageImage = storageValue.image;
let storageSize = storageValue.size;
let storageColor = storageValue.color;



document.getElementById("subtotal").innerHTML = storageQuantity*300.00;
document.getElementById("checkoutImage").src = storageImage;
document.getElementById("color").innerHTML = storageColor;
document.getElementById("quantity").innerHTML = storageQuantity;
document.getElementById("size").innerHTML = storageSize;

document.getElementById("cartTotal").innerHTML = storageQuantity*148
document.getElementById("total").innerHTML = storageQuantity*148.00;
document.getElementById("discount").innerHTML = "0%";


let updateQuantity = () => {
    let val = document.getElementById("numberField").value
    storageQuantity = val;


    document.getElementById("quantity").innerHTML = storageQuantity;

    let cartTotal = val* 300.00;
    document.getElementById("total").innerHTML = cartTotal;
    document.getElementById("subtotal").innerHTML = cartTotal
}


let deletecart = () => {
    let delID = document.getElementById("del-cart");
    delID.remove();
    localStorage.clear()
    document.getElementById("subtotal").innerHTML = 0;
    document.getElementById("discount").innerHTML = "0%"
    document.getElementById("total").innerHTML = 0
}




let discountCoupon = () => {
    let coupon = document.getElementById("coupon").value
    console.log(coupon)
    if(coupon.length < 5){
        alert("Invalid Coupon");
    }
    else{
        document.getElementById("discount").innerHTML = "40%";
        
        document.getElementById("total").innerHTML = 0.4*parseFloat(document.getElementById("subtotal").innerHTML);
        // console.log(document.getElementById("subtotal").innerHTML)
    }

}