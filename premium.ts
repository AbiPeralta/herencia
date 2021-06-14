import { Suscripcion } from './suscripcion';

export class Premium extends Suscripcion {

  constructor() {
    super();
    this.setMostrarAnuncios(false);
  }


  imprimir() { }



}