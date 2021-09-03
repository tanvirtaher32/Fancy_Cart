// Phone 

let phoneCount = document.getElementById('phoneCount');
let phoneCountValue = parseInt(phoneCount.value);
let phonePrice = document.getElementById('phonePrice');
let phonePriceValue = phonePrice.innerHTML;

let subTotalValueChange;

//phone minus
document.getElementById('phoneCountMinus').addEventListener('click', function (e) {

    if (phoneCountValue > 0) {
        phoneCountValue -= 1;
        phoneCount.value = phoneCountValue;
        phonePrice.innerHTML = phonePriceValue * phoneCountValue;
    }

    //sub Total 
    let subTotal = document.getElementById('subTotal');
    let subTotalValue = parseInt(subTotal.innerHTML);
    subTotalValue = 0;
    subTotal.innerHTML = subTotalValue + (phonePriceValue * phoneCountValue) + (phoneCasePriceValue * phoneCaseCountValue);
    subTotalValueChange = parseInt(subTotal.innerHTML)


})

// Phone plus
document.getElementById('phoneCountPlus').addEventListener('click', function (e) {


    phoneCountValue += 1;
    phoneCount.value = phoneCountValue;
    phonePrice.innerHTML = phonePriceValue * phoneCountValue;

    //sub Total 
    let subTotal = document.getElementById('subTotal');
    let subTotalValue = parseInt(subTotal.innerHTML);
    subTotalValue = 0;
    subTotal.innerHTML = subTotalValue + (phonePriceValue * phoneCountValue) + (phoneCasePriceValue * phoneCaseCountValue);
    subTotalValueChange = parseInt(subTotal.innerHTML)


})

// Phone case
let phoneCaseCount = document.getElementById('phoneCaseCount');
let phoneCaseCountValue = parseInt(phoneCaseCount.value);
let phoneCasePrice = document.getElementById('phoneCasePrice');
let phoneCasePriceValue = phoneCasePrice.innerHTML;

//phone case minus
document.getElementById('phoneCaseCountMinus').addEventListener('click', function (e) {

    if (phoneCaseCountValue > 0) {
        phoneCaseCountValue -= 1;
        phoneCaseCount.value = phoneCaseCountValue;
        phoneCasePrice.innerHTML = phoneCasePriceValue * phoneCaseCountValue;
    }

    //sub Total 
    let subTotal = document.getElementById('subTotal');
    let subTotalValue = parseInt(subTotal.innerHTML);
    subTotalValue = 0;
    subTotal.innerHTML = subTotalValue + (phonePriceValue * phoneCountValue) + (phoneCasePriceValue * phoneCaseCountValue);
    subTotalValueChange = parseInt(subTotal.innerHTML)


})

// Phone case plus
document.getElementById('phoneCaseCountPlus').addEventListener('click', function (e) {


    phoneCaseCountValue += 1;
    phoneCaseCount.value = phoneCaseCountValue;
    phoneCasePrice.innerHTML = phoneCasePriceValue * phoneCaseCountValue;

    //sub Total 
    let subTotal = document.getElementById('subTotal');
    let subTotalValue = parseInt(subTotal.innerHTML);
    subTotalValue = 0;

    subTotal.innerHTML = subTotalValue + (phonePriceValue * phoneCountValue) + (phoneCasePriceValue * phoneCaseCountValue);
    subTotalValueChange = parseInt(subTotal.innerHTML)
    console.log(subTotalValueChange);

   

})

// checkOut
document.getElementById('checkOut').addEventListener('click',function(e) {


     //Tax
 let tax = document.getElementById('tax');
 let taxValue = parseInt(tax.innerHTML);
 if (subTotalValueChange <= 2000) {
     taxValue = (subTotalValueChange / 100) * 10;
 }
 else if (subTotalValueChange>2000 && subTotalValueChange<=5000){
     taxValue = (subTotalValueChange /100)*12;
 }
 else{
     taxValue = (subTotalValueChange/100)*15;
 }

 tax.innerHTML = taxValue.toFixed(2);

 // total
 let total = document.getElementById('total');
 let totalValue = parseInt(total.innerText).toFixed(2);
 let totalValueChange = subTotalValueChange + taxValue;
 total.innerHTML = totalValueChange.toFixed(2);
 console.log(totalValueChange);


})











