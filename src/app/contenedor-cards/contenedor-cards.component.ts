import { Component, OnInit } from '@angular/core';
import { Blog } from '../modelsBlog/blog';
import { BlogService } from '../ServicioBlog/Servicioblog';

@Component({
  selector: 'app-contenedor-cards',
  templateUrl: './contenedor-cards.component.html',
  styleUrls: ['./contenedor-cards.component.css']
})
export class ContenedorCardsComponent implements OnInit {

  blogs:Blog[];
  
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(
      b =>this.blogs=b
    );
  
  }

}
