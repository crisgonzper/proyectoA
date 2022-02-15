import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {
  ciudad:string='';
  poblacion:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe ( (params) => {
      if (params['ciudad'] != null) {
        this.ciudad = params['ciudad']; 
      }
    });
    this.route.params.subscribe ( (params) => {
      if (params['poblacion'] != null) {
        this.poblacion = params['poblacion']; 
      }
    });

  }

}
