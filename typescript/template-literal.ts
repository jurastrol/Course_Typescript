(function(){

  function getEdad(){
    return 100+23;
  }

  const nombre = 'Juan';
  const apellido = 'Rastrollo';
  const edad = 25;

  //const salida = nombre + " " + apellido + " (Edad: " + edad + ")";
  const salida= `${nombre} ${apellido} (Edad: ${getEdad()})`;
  console.log(salida); 


})();
