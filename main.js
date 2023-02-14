// //Taller 3

// 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

// let num1=Number(prompt("Ingrese el numero 1"));
// let num2=Number(prompt("Ingrese el numero 2"));

// (num1>num2)?alert(`el ${num1} es mayor a ${num2}`):alert(`el ${num2} es mayor a ${num1}`);


// 2.	Realice un programa que calcule el máximo de N números leídos desde teclado.




// 3.	Realizar un programa que pueda sumar dos números leídos por teclado y escribir el resultado.	
// let num1=Number(prompt("Ingrese el numero 1"));
// let num2=Number(prompt("Ingrese el numero 2"));
// let resultado=num1+num2;
// alert(`La suma de los numeros ingresados es: ${resultado}`);


// 4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor

//SE APLICA FUNCION DE LA LIBRERIA MATH PARA HALLAR LOS VALORES SOLICITADOS.
// let num1=Number(prompt("Ingrese el numero 1"));
// let num2=Number(prompt("Ingrese el numero 2"));
// let num3=Number(prompt("Ingrese el numero 3"));
// alert(`El numero mayor es: `+Math.max(num1,num2,num3));
// alert(`El numero menor es: `+Math.min(num1,num2,num3));

// 5.	Realizar un programa que permita escribir los 100 primeros pares.

// let par;
// for (let i = 2; i <= 100; i++) {
//     if(i%2==0){
//         alert(i)
//     }
// }

// 6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares.
// let sumap=0;
// let prodimp=1;
// let num=parseInt(prompt("Ingrese un numero, \" para detener el programa escriba 0\" "));

// while (num !=0) {
//         //Ingrese un numero, \" para detener el programa escriba 0\" 
    
//         if(num%2==0){
//             sumap += num;
//             alert("la suma de pares es "+sumap);
//         }else{
//             alert("impar")
//             prodimp *=num;
//             alert("El producto de impares es: "+prodimp);
//         }
     
//         num=parseInt(prompt("Ingrese un numero, \" para detener el programa escriba 0\" "));
// }
// alert(`El producto final de impares es ${prodimp} Y La suma final de pares es ${sumap}`);


// 7.	Dados dos números enteros positivos N y D, se dice que D es un divisor de N si el resto de dividir N entre D es 0. Se dice que un número N es perfecto si la suma de sus divisores (excluido el propio N) es N. Por ejemplo 28 es perfecto, pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. Hacer un organigrama que dado un número N nos diga si es o no perfecto.

let num=parseInt(prompt("Digite un numero para saber si es \"Perfecto\" o No "));
let suma=0;
    for (let i = 1; i < num; i++) 
    {
        if (num%i==0) 
        {
         suma +=i;   
        }
            //PROBANDO SUMA Y SI VALOR ES PERFECTO
            //alert(suma);
            // if(suma==num){
            //     alert("Es un numero perfecto");
            //     }
    }
    (suma==num)?alert("Es un numero perfecto"):alert("No es un numero perfecto");


// Nota: En los archivos index.html mostrar en la pantalla un mensaje que diga “Ver la consola del navegador o oprima la tecla F12 para ver los resultados”. Si utiliza la función console.log(); de lo contrario si utiliza alert(); No mostrar nada en el index.html
