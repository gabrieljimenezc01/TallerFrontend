import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdoptanteModel } from '../shared/adoptante.model';
import { AdoptanteService } from '../shared/adoptante.service';

@Component({
  selector: 'app-lista-adoptantes',
  templateUrl: './lista-adoptantes.component.html',
  styleUrl: './lista-adoptantes.component.css'
})
export class ListaAdoptantesComponent implements OnInit{
  adoptantes: Observable<AdoptanteModel[]> | undefined;
  constructor(private adoptanteService: AdoptanteService){}
  ngOnInit() {
    this.adoptantes=this.adoptanteService.obtenerAdoptantes();
  }

  borrarAdoptante(idAdoptante:string){
    this.adoptanteService.borrarAdoptante(idAdoptante).subscribe({
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
