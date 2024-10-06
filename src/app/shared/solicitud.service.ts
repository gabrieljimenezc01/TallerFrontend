import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  BASE_URL='http://localhost:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de Mascotas
  obtenerSolicitudes(){
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  //Buscar una mascota por ID
  obtenerSolicitud(idSolicitud:string){
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscarId/${idSolicitud}`);
  }

  //Crear una Mascota
  agregarSolicitud(solicitud: SolicitudModel){
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`,solicitud);
  }

  //Actualizar una Mascota
  actualizarSolicitud(solicitud: SolicitudModel){
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.id}`,solicitud);
  }

  //ELiminar una Mascota
  borrarSolicitud(idSolicitud: string){
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminar/${idSolicitud}`);
  }


}
