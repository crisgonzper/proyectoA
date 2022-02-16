import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:any;
  usuarioAagregar: any={};

  constructor( private usService:UsuariosService) { 
    this.listarUsuarios();
  }

  ngOnInit(): void {
  }

 listarUsuarios():void{
   this.usService.listarUsuarios().subscribe({
     next:(r) => this.usuarios=r,
     error:(e) => console.log(JSON.stringify(e))
     
   })
 }

  eliminarUsuario(id_usuario:string):void{
    console.log('Eliminar usuario ' +id_usuario);

  }

  nuevoUsuario():void{
    console.log('Nuevo usuario ' );
    console.log(this.usuarioAagregar);

  }
}
