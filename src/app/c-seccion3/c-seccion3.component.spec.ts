import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductosService } from '../servicio/productos.service';
import { CSeccion3Component } from "./c-seccion3.component";
import { Product } from '../models/Product';

const listProduct: Product[] = [
  {Id: '1', Maker: '', img: '', Url: '', Title: '', Ratings: null},
  {Id: '2', Maker: '', img: '', Url: '', Title: '', Ratings: null},
  {Id: '3', Maker: '', img: '', Url: '', Title: '', Ratings: null}
];

describe ('CSeccion3Component Component', ()=> { 
  let component: CSeccion3Component;
  let fixture: ComponentFixture<CSeccion3Component>; //Nos ayudará por ejemplo a extraer un servicio de un componente
  
  beforeEach( () => { //Configuración del test:
    TestBed.configureTestingModule ( {  
        imports: [
            RouterTestingModule, 
            //HttpClientTestingModule /*no realiza una petición HTTP real*/              
        ],
        declarations:  [
          CSeccion3Component
        ],
        providers: [  //Servicios que utiliza nuestro componente
            ProductosService//, FormBuilder      
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] //Para evitar ciertos errores 
    }).compileComponents();        
  });

  beforeEach( () => { //Instanciar el componente:
    fixture = TestBed.createComponent(CSeccion3Component);
    component = fixture.componentInstance; 
    fixture.detectChanges(); //Forzar a que pase por el ngOnInit
  });

  it ('should create', () => {
    expect(component).toBeTruthy();
  });

  it('concatenaIdProductos return string', () => {
    const idsConcatenados = component.concatenaIdProductos(listProduct);
    expect (idsConcatenados).toBeTruthy();
    expect (idsConcatenados).not.toBeNull();
    expect (idsConcatenados).toBe('1, 2, 3, ');    
  });

});


