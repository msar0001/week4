console.log("Js file linked!")

const region="Canada"
const provinc="Alberta"
if(region=="Canada" && provinc==="Alberta")
{
    console.log("you are seeing Canada verion")
}


let price=20
const shippingFee=15
let cartTotal
if (price >= 50) 
{
  cartTotal = price
  //console.log(cartTotal)
  
} 
else 
{
  cartTotal=price+shippingFee
}

document.getElementById("cart1").innerHTML+="your cart total is"+cartTotal

//resetting price
price=105
const discount=0.15
if (price >= 100) 
{
  cartTotal = price -(price*discount)
  
} 
else if (price>=50)
{
  cartTotal=price
}
else{
    cartTotal=price+shippingFee
}

document.getElementById("cart2").innerHTML+="your cart total is"+cartTotal


//switch

let planet="Earth"
let massage
switch(planet){
    case "Earth":
        massage="welcome to the third planet!"
        break
    case "mars":
    massage="welcome to the red planet!"
    break
    case "Jupiter":
    massage="welcome to the largest planet!"
    break
    default:
        massage=`you are on ${planet},sorry we do not service this planet `


}
document.getElementById("planet").innerHTML+=massage

// switch ex 2 with fall though
let answer="b"
switch(answer){
    case"a":
    case"d":
    case"c":
    document.getElementById("quiz").innerHTML+="incorrect answer,please try again"
    break
    case"b":
    document.getElementById("quiz").innerHTML+="prefact, you got it right"
    
}


//Functions

function myName(){
return("Omar")
}
let name= myName()
console.log(name)
document.querySelector(".container h1").innerHTML+= "hello "+name;


function calculator(num1,num2,operator){
    switch (operator) 
    {
        case"add":
        return num1+num2
        break
        case"sub":
        return num1-num2
        break
        case"multi":
        return num1*num2
        break
        case"div":
        return num1/num2
        break
        default:
            return"i dont understand the operator"

    }
}
console.log(calculator(5,4,"multi "))


function setTittle(newTittle){
    document.querySelector("h1").textContent=newTittle
}