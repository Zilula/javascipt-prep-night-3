
//initial condition
var countNum = prompt('How high should we count even numbers?')

for(var i = 0; i < countNum;  i++) {
    if (i % 2 === 0) {
        console.log(i, 'is even');
    }
}
