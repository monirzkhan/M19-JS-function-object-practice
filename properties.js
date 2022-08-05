var shoppingCart ={

    egg: 12,
    pen: 15,
    rice: '5 kg',
    milk: '1 kg',
    onion: '2 kg',

}
console.log(shoppingCart);
//when you know the specific property name , use dot notation(.) to get property value.

var milkPacket = shoppingCart.milk;
console.log(milkPacket);

//other system:
var onionBusket = shoppingCart['onion'];
console.log(onionBusket);

//another system:
var propertyName = 'rice';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);


////if you get properties like array:

var allProperties =Object.keys(shoppingCart);
console.log(allProperties);

////if you get property values like array:
var propertyValues =Object.values(shoppingCart);
console.log(propertyValues);

//set property value:
shoppingCart.egg = 24;
console.log(shoppingCart);

//another way to set values:
shoppingCart['egg'] = 36;
console.log(shoppingCart);

//another Way to set values:
var eggProperty = 'egg';
shoppingCart[eggProperty] = 30;
console.log(shoppingCart);