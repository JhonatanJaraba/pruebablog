import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../cargar-scripts.service"
@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService) 
  {
    _CargaScripts.Carga(["aos"]);
   }

  ngOnInit(): void {
  }

}
