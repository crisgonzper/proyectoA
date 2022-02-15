import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personaData:any={nombre:"María", apellidos:"De la O", edad:25};
  constructor() { }

  ngOnInit(): void {
  }

  eventoBotonAngular():void
  {
    console.log('Evento: ' +this.personaData+' '+ this.personaData.apellidos);
  }

}
