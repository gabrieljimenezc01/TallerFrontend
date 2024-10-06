export class SolicitudModel {
    constructor(
      public id: string,
      public estado: string,
      public adoptantes_id: string,
      public mascotas_id: string,
    ) { }
  }
  