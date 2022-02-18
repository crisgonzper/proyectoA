import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UsuariosService } from '../servicio/usuarios.service';
import { UsuarioComponent } from "./usuario.component";

const userService = {
    listarUsuarios: () => of([]),
    listadoDeUsuarios: () => []
};

describe ('UsuarioComponent Component', ()=> {
    let component: UsuarioComponent;
    let fixture: ComponentFixture<UsuarioComponent>; //Nos ayudará por ejemplo a extraer un servicio de un componente

    beforeEach( () => { //Configuración del test:
        TestBed.configureTestingModule ( {  
            imports: [
                RouterTestingModule, 
                HttpClientTestingModule /*no realiza una petición HTTP real*/              
            ],
            declarations:  [
                UsuarioComponent
            ],
            providers: [  //Servicios que utiliza nuestro componente
                //UsuariosService
                {
                    provide: UsuariosService, //cuando se necesite UsuariosService use lo de abajo:
                    useValue: userService
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] //Para evitar ciertos errores 
        }).compileComponents();        
    });

    beforeEach( () => { //Instanciar el componente:
        fixture = TestBed.createComponent(UsuarioComponent);
        component = fixture.componentInstance; 
        fixture.detectChanges(); //Forzar a que pase por el ngOnInit
    });

     it('should create', () => {
        expect(component).toBeTruthy();
    });

  
    it('listarUsuariosSimple', () => {
        const service = fixture.debugElement.injector.get(UsuariosService);
        //El 'espía' debe crearse antes de la llamada: 
        const spy1 = spyOn(service, 'listadoDeUsuarios').and.callFake ( ()=> null); 

        component.listarUsuariosSimple();

        expect(spy1).toHaveBeenCalled();
    });

});