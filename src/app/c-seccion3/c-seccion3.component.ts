import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute} from '@angular/router'; 
import { ProductosService } from '../servicio/productos.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {

  ciudad:string='';
  poblacion:string='';
  productos: Product[] =[];

  constructor(private route:ActivatedRoute,  productosService: ProductosService) { 
    this.productos=productosService.listadoProductos();

  }

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

  concatenaIdProductos (listProducts:Product[]):string {
    let cadena:string="";

    listProducts.forEach ( (pr:Product) => {
      cadena += pr.Id + ", ";
    });
    return cadena;
  }


}
