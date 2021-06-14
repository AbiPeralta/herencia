
export abstract class Suscripcion {

  protected mostrarAnuncios: boolean;
  protected costo: number;
  protected vigencia: number;


  setMostrarAnuncios(show: boolean): void {
    this.mostrarAnuncios = show;
  }

  getMostrarAnuncios(): boolean {
    return this.mostrarAnuncios;
  }

  setCosto(costo: number) {
    this.costo = costo;
  }

  getCosto(): number {
    return this.costo;
  }

  setVigencia(vigencia: number) {
    this.vigencia = vigencia;
  }

  getVigencia(): number {
    return this.vigencia;
  }

  abstract imprimir(): void

  
}