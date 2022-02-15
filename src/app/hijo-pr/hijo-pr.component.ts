import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-pr',
  templateUrl: './hijo-pr.component.html',
  styleUrls: ['./hijo-pr.component.css']
})
export class HijoPrComponent implements OnInit {

  @Input("propiedadHijo") datosPasadosAlHijo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
