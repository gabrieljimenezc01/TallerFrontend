import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptanteModel } from './adoptante.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {


  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de Adoptantes
  obtenerAdoptantes(){
    return this.http.get<AdoptanteModel[]>(`${this.BASE_URL}/adoptantes/buscar`);
  }

  //Buscar una Adoptante por ID
  obtenerAdoptante(idAdoptante:string){
    return this.http.get<AdoptanteModel>(`${this.BASE_URL}/adoptantes/buscarId/${idAdoptante}`);
  }

  //Crear una Adoptante
  agregarAdoptante(adoptante: AdoptanteModel){
    return this.http.post<string>(`${this.BASE_URL}/adoptantes/crear`,adoptante);
  }

  //Actualizar una Adoptante
  actualizarAdoptante(adoptante: AdoptanteModel){
    return this.http.put<string>(`${this.BASE_URL}/adoptantes/actualizar/${adoptante.id}`,adoptante);
  }

  //ELiminar una Adoptante
  borrarAdoptante(idAdoptante: string){
    return this.http.delete<string>(`${this.BASE_URL}/adoptantes/eliminar/${idAdoptante}`);
  }
}
