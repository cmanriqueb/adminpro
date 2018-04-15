import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

this.countTo3().then(
  // () => console.log ('Finished ', okMsg) Para no recibir ningún mensaje o parámetro
  okMsg => console.log ('Finished ', okMsg)
).catch( error => console.log('Error in promise: ' , error));

   }

  ngOnInit() {
  }

  countTo3(): Promise<boolean> { // Especifico que la promesa retornará un booleano (especifico el tipo de dato que retornaré)
    let promise: Promise<boolean> = new Promise( (resolve, reject ) => {
      // si no quiero especificar el tipo de dato, debo poner aquí solo let Promise y arriba puedo dejar countTo3()
      let count = 0;
      let interval = setInterval( () => {
        count += 1;
        console.log(count);
        if ( count === 3 ) {
          resolve(true); // Enviaré el OK! a la función then
          clearInterval(interval); // con esto detengo el incremento de la variable interval (count+=1)
        }
      }, 1000);
    });

    return promise;
  }
}
