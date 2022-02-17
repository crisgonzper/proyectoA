import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate:TranslateService) {
    
   }

  ngOnInit(): void {
  }

  //cambia idioma
    //Se cambia idioma 
    changeLangugeToSpanish():void {
      this.translate.use('es');
      console.log('Idioma español');
    }
  
    
    //Se cambia idioma 
    changeLangugeToEnglish():void {
      this.translate.use('en');
      console.log('Idioma inglés');
    }
    
}
