var shoppingCart ={

    egg: 12,
    pen: 15,
    rice: '5 kg',
    milk: '1 kg',
    onion: '2 kg',

}

var keys = Object.keys(shoppingCart);

for (i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    console.log(propertyName, propertyValues);
}

//for in loop:
for (var propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}