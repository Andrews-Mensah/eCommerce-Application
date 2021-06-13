let goods = {
    quantity: 0,
    image: "",
    size: "",
    color: "",

}



let image = document.getElementById('pphoto');

let selectOrange = () => {
    document.getElementById("colorName").innerHTML = "Orange";
    goods.color= "Orange"

}

let selectPurple = () => {
    document.getElementById("colorName").innerHTML = "Purple";
    goods.color="Purple"

}

let quantityVal = parseInt(document.getElementById('quantity').value);
let add = () => {
    if (quantityVal < 10) {
        quantityVal += 1;
        document.getElementById("quantity").value = quantityVal;
    }
}

let subtract = () => {
    if (quantityVal > 1) {
        quantityVal -= 1;
        document.getElementById("quantity").value = quantityVal;
    }
}


let addToCart = () => {
    document.getElementById("theSidecart").style.width = "20rem";
    let newquantityVal = parseInt(document.getElementById('quantity').value);
    document.getElementById("quantitySelected").innerHTML = newquantityVal;
    goods.quantity = newquantityVal;
    let subTotal = newquantityVal * 300.00;
    document.getElementById("subtotal").innerHTML = subTotal;

    let sizeOption = document.getElementById("sizeOptions").value;
    goods.size = sizeOption;
    document.getElementById("sizeSelected").innerHTML = sizeOption;
}


localStorage.setItem(0, JSON.stringify(goods));

let closeNav = () => {
    document.getElementById("theSidecart").style.width = "0";
}


