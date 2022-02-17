import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personaData:any={nombre:"María", apellidos:"De la O", edad:25};
  constructor( translate:TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
   }

  ngOnInit(): void {
  }

  eventoBotonAngular():void
  {
    console.log('Evento: ' +this.personaData+' '+ this.personaData.apellidos);
  }

}
