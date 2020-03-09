(() => {

  const sumar = (a: number, b: number): number => a+b;

  const nombre = (): string => 'Hola Juan';

  const obtenerSalario = ():Promise<string> => {
    
    return new Promise((resolve, reject) => {
      resolve('Juan');
    })
  }

  obtenerSalario().then(a => console.log(a.toUpperCase()))

})();
