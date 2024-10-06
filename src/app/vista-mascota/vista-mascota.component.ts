import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../shared/mascota.service';
import { MascotaModel } from '../shared/mascota.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vista-mascota',
  templateUrl: './vista-mascota.component.html',
  styleUrl: './vista-mascota.component.css'
})
export class VistaMascotaComponent implements OnInit{

  idMascota= '';
  mascota=new MascotaModel('','','','','','','','','');
  constructor(private mascotaService: MascotaService,private route: ActivatedRoute,private router: Router){
  }

  ngOnInit(){
    this.idMascota=this.route.snapshot.params['idMascota'];
    console.log(`El idMascota es ${this.idMascota}`);

     if(this.idMascota){
      //viene de ver mascota
        this.mascotaService.obtenerMascota(this.idMascota).subscribe({
        next: data=>{
          console.log(data);
          this.mascota=data;
          console.log(this.mascota);
        },
        error: err=>{
          console.log(`Error ${err}`);
        }

      });

     }

  }

}
