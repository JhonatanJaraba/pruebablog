import { Component, OnInit } from '@angular/core';
import { Blog } from '../modelsBlog/blog';
import { BlogService } from '../ServicioBlog/Servicioblog';
@Component({
  selector: 'app-home-contenido',
  templateUrl: './home-contenido.component.html',
  styleUrls: ['./home-contenido.component.css']
})
export class HomeContenidoComponent implements OnInit {

  blogs:Blog[];
  
  constructor(private blogService:BlogService) { }

  
  
  ngOnInit(): void {
    this.blogService.getAll().subscribe(
      b =>this.blogs=b
    );
    
  }
  
  
}
