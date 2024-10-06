import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { VistaMascotaComponent } from './vista-mascota/vista-mascota.component';
import { ListaAdoptantesComponent } from './lista-adoptantes/lista-adoptantes.component';
import { EditarAdoptantesComponent } from './editar-adoptantes/editar-adoptantes.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
 {path: 'home', component: BienvenidaComponent},
 {path: 'mascotas', component: ListaMascotasComponent},
 {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
 {path: 'mascotas/agregar',component: EditarMascotasComponent},
 {path: 'mascotas/vista/:idMascota',component: VistaMascotaComponent},
 {path: 'adoptantes',component: ListaAdoptantesComponent},
 {path: 'adoptantes/agregar',component: EditarAdoptantesComponent},
 {path: 'adoptantes/editar/:idAdoptante', component: EditarAdoptantesComponent},
 {path: '**',redirectTo: '/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
