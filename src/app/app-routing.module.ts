import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { VistaMascotaComponent } from './vista-mascota/vista-mascota.component';

const routes: Routes = [
 {path: 'mascotas', component: ListaMascotasComponent},
 {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
 {path: 'mascotas/agregar',component: EditarMascotasComponent},
 {path: 'mascotas/vista/:idMascota',component: VistaMascotaComponent},
 {path: '**',redirectTo: '/mascotas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
