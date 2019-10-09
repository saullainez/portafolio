import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean;
  public infoAutor: any;
  
  @ViewChild('texto', {static: false}) texto;

  constructor() { 
    this.captions = true;
  }

  ngOnInit() {
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  autor(event){
    this.infoAutor = event;
  }

}
