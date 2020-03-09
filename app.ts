(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  const PERSONAJE = {
    nombre,
    edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto

  interface Batman {
    nombre: string,
    artesMarciales: Array<string>
  }

  const batman:Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  console.log(batman);

  // Convertir esta funcion a una funcion de flecha
  // function resultadoDoble( a, b ){
  //   return (a + b) * 2
  // }

  const resultadoDoble = (a:number, b:number):number => (a + b) * 2;

  console.log(`Resultado doble de 5 y 6 es ${resultadoDoble(5,6)}`)
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

  const getAvenger = ( nombre:string, poder?:string, arma:string = 'arco'): string => {
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + arma
    }
    return mensaje;
  };

  console.log(getAvenger('Capitan América', 'puñetazo'))
  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {

    constructor(public base  : number, 
                public altura: number){}

    getArea = ():number => {
      console.log(`El area del rectángulo con base: ${this.base} y altura: ${this.altura} es: ${this.base * this.altura}`)
      return this.base*this.altura;
    }
  }

  const rec: Rectangulo = new Rectangulo(10, 7);
  console.log(rec);
  const area = rec.getArea();
  console.log(area)


})();