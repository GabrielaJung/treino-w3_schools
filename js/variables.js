const price1 = 93; //const => variável não pode ser mudada (arrays, objects)
const price2 = 37; // const => não pode ser redeclarada

let total = price1 + price2; 

const discount = 5 // %

console.log(total); // 130

total = total - (total*(discount/100)) // let => variável pode ser mudada, não redeclarada

console.log(total); // 123.5

/* 
{
    let x = 2;
}
    x não pode ser usado aqui

------------
let x = 10
// x vale 10
{
    lex x = 2
    // x vale 2
}
// x vale 10
// mesmo sentido para const
*/

// pode criar array em const
const fruits = ['strawberry', 'watermelon', 'avocato'];

// pode mudar um elemento do array
fruits[1] = 'grape'

// pode add elemento
fruits.push('orange')

// não pode sobescrever constante
// fruits = ['grape', 'orange', 'avocato']
// obs.: o mesmo vale para objetos