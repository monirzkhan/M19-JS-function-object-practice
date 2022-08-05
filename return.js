function add(num1, num2, num3) {
    console.log(num1, num2, num3);
    var sum = num1 + num2 + num3;
    return sum
}
var total = add(100, 50, 80);
console.log('total:', total);

//////////////////////////////
function bringJuice(money) {
    var juicePrice = 110;
    var juiceQuantity = money / juicePrice;
    var juiceQuantity = juiceQuantity.toFixed(2);
    var juiceQuantity = parseFloat(juiceQuantity);
    return juiceQuantity
}
var juiceQuantity = bringJuice(5000);
console.log('Total Juice:', juiceQuantity);
/////////////////////////////////

// ////Structure:
// //** Function functionName (parameter){
//     Function Body
//      return
// }
// var return value = functionName(parameter);
// *// /


function add(num1, num2) {
    const sum = num1 + num2 ;
    return sum;
}
const result1 = add(10, 20);
const result2 = add(20, 10);
const result3 = add(10, 5);
const finalResult = add(result1, result2+result3);
console.log(finalResult);
