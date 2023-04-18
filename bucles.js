//-Este archivo debe calcular el factorial de 10 utilizando un bucle for

let x=1
for (let i = 10; i > 0; i--) {
    x*=i
    
}
console.log(" el factorial de 10 es : "+x);
//-Este archivo debe calcular el factorial de 10 utilizando un bucle while
let dato=10
while (dato<10) {
    let x=1
for (let i = 10; i > 0; i--) {
    x*=i
    
}

}console.log("el factorial de 10 es : "+x);


// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

while (dato<20) {
    let x=1
for (let i = 20; i > 0; i--) {
    x*=i
    if (x=3628800) {
        break
    }
}

}console.log("el factorial de 10 es : "+x);