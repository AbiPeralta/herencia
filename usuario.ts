
import { Suscripcion } from './suscripcion';
import { Free } from './free';
import { Basic } from './basic';
import { Premium } from './premium';

export class Usuario {
  private id: number
  private nombre: string
  private apellido: string
  private suscripcion: Suscripcion

  constructor() {
    this.suscripcion = new Free();
  }

  public setId(id: number) {

    this.id = id
  }

  public getId() {
    return this.id
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre
  }

  public setApellido(apellido: string) {
    this.apellido = apellido;
  }

  public getApellido(): string {
    return this.apellido
  }

  /**
   * Patron de diseño factory
   * @param suscripcion 
   */
  public setSuscripcion(suscripcion: string) {
    switch (suscripcion) {
      case 'free':
        this.suscripcion = new Free();
        break;
      case 'basic':
        this.suscripcion = new Basic();
        break;
      case 'premium':
        this.suscripcion = new Premium();
        break;
    }
  }

  /**
   * 
   * @returns 
   */
  public getSuscripcion(): Suscripcion {
    return this.suscripcion;
  }
}