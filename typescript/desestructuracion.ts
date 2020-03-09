(() => {

  const avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Fuerza'
  }

  const extraer = ({nombre, poder}: any)=>{
    //const {nombre, clave, poder} = avenger;
    console.log(nombre);
    //console.log(clave);
    console.log(poder);
  }

  //extraer(avenger);

  const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
  
  const [, , arana] = avengers;  
  // console.log(loki);
  // console.log(hombre);
  //console.log(arana);

  const extraerArr = ([thor, ironman, spiderman]: string[])=>{
    //const {nombre, clave, poder} = avenger;
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  }

  extraerArr(avengers);

})();
