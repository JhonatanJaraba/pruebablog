import { Component, OnInit } from '@angular/core';
import { Blog } from '../modelsBlog/blog';
import { BlogService } from '../ServicioBlog/Servicioblog';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contenido-card',
  templateUrl: './contenido-card.component.html',
  styleUrls: ['./contenido-card.component.css']
})
export class ContenidoCardComponent implements OnInit {

  blog:Blog = new Blog();
  titulo:string="Registro de Blog";
  constructor(private blogService:BlogService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      b=>{
        let id=b['id'];
        if(id){
          this.blogService.get(id).subscribe(
            es=>this.blog=es
          );
        }
      }
    );
  }

  
}
