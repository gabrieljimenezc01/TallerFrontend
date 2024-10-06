import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { MascotaModel } from '../shared/mascota.model';
import { AdoptanteModel } from '../shared/adoptante.model';
import { MascotaService } from '../shared/mascota.service';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css'
})
export class ListaSolicitudesComponent implements OnInit{
  solicitudes: Observable<SolicitudModel[]> | undefined;
  mascota= new MascotaModel('','','','','','','','','')
  adoptante= new AdoptanteModel('','','','','','','')
  constructor(private solicitudService: SolicitudService, private mascotaService: MascotaService, private adoptanteService: AdoptanteService){}
  ngOnInit() {
    this.solicitudes=this.solicitudService.obtenerSolicitudes();
  }

  borrarSolicitud(idSolicitud:string){
    this.solicitudService.borrarSolicitud(idSolicitud).subscribe({
      next: data=>{
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err=>{
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
