var num = prompt("Ingrese la cantidad de numeros a sumar: ");
var sumaimpar = 0;
var sumapar = 0;

for(let i=1;i<=num;i++){
    if(i%2 == 0){
        sumapar = sumapar+i;
    }else{
        sumaimpar = sumaimpar+i;
    }
}
console.log("La sumatoria de los numeros pares son: ",sumapar);
console.log("La sumatoria de los numeros impares son: ",sumaimpar);
