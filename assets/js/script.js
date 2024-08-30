const numero = () => {
    let num = parseInt(prompt('Ingrese un numero entre 1 y 20'));
    let resultado;  
    if (num >=1 && num<=20){
      for (i = 1; i <= num; i++) {
        resultado = num * i;
        console.log(i + ' x ' + num + ' = ' + resultado);
      }
      for (i = 1; i <= num; i++) {
        let factor = 1;
        for (j = 1; j <= i; j++) {
          factor = factor* j;
        }
        console.log('El factorial de ' + i + ' es: ' + factor);
      }
    }else{
      console.log("Número fuera del rango");
    }
  }
  numero ();