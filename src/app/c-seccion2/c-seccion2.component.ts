import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {
  nombrePersona:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe ( (params) => {
      if (params['nombre'] != null) {
        this.nombrePersona = params['nombre']; 
      }
    });
  }

}
