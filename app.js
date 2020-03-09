"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    const PERSONAJE = {
        nombre,
        edad
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(batman);
    // Convertir esta funcion a una funcion de flecha
    // function resultadoDoble( a, b ){
    //   return (a + b) * 2
    // }
    const resultadoDoble = (a, b) => (a + b) * 2;
    console.log(`Resultado doble de 5 y 6 es ${resultadoDoble(5, 6)}`);
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    // function getAvenger( nombre:string, poder?:string, arma:string = 'arco' ){
    //   var mensaje;
    //   if( poder ){
    //     mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    //   }else{
    //     mensaje = nombre + ' tiene un ' + poder
    //   }
    // };
    const getAvenger = (nombre, poder, arma = 'arco') => {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + arma;
        }
        return mensaje;
    };
    console.log(getAvenger('Capitan América', 'puñetazo'));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.getArea = () => {
                console.log(`El area del rectángulo con base: ${this.base} y altura: ${this.altura} es: ${this.base * this.altura}`);
                return this.base * this.altura;
            };
        }
    }
    const rec = new Rectangulo(10, 7);
    console.log(rec);
    const area = rec.getArea();
    console.log(area);
})();
