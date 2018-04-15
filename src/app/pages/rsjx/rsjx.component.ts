import { Component, OnInit, OnDestroy } from '@angular/core';
// Para amnbiente de producción debo usar:
// import { Observable } from 'rxjs/Observable';

// Se pone automáticamente este comment
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rsjx',
  templateUrl: './rsjx.component.html',
  styles: []
})
export class RsjxComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    // Ejemplo de retry... originalmente estaba obs.subscribe(
    this.subscription = this.retrunObservable()
    .retry()
    .subscribe(
      number => console.log( 'Subs', number ),
      error => console.log('Error in observer: ' + error),
      () => console.log('Observer finished')
    );
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  retrunObservable() {
    return new Observable( observer => {
      let count = 0;
      let interval = setInterval( () => {
        count += 1;
        observer.next( count );
        if ( count === 3 ) {
          clearInterval( interval );
          observer.complete();
        }
        // Ejemplo de error en observer
        if ( count === 2 ) {
          observer.error('HELP!!');
        }
      }, 1000);
    });
    // usando la forma de la línea 31 de esta función en vez de return obs;
  }
}
