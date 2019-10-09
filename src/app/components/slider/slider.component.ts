import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions : boolean;
  @Output() getAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      nombre: "Saúl Laínez",
      correo: "saullainez@hotmail.es",
      profesion: "Desarrollador"
    };
   }

  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
    this.getAutor.emit(this.autor);
  }

}
