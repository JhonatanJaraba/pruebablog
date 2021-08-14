import { Component, OnInit } from '@angular/core';
import { Blog } from '../modelsBlog/blog';
import { BlogService } from '../ServicioBlog/Servicioblog';

@Component({
  selector: 'app-ingreso-blog',
  templateUrl: './ver-blog.component.html',
  styleUrls: ['./ver-blog.component.css']
})
export class VerBlogComponent implements OnInit {
  titulo:string="Lista de blogs";

  blogs:Blog[];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(
      b =>this.blogs=b
    );
  
  }
  delete(blog:Blog):void{
    console.log("Hello form delete");
    this.blogService.delete(blog.id).subscribe(
      res=>this.blogService.getAll().subscribe(
        response=>this.blogs=response
      )
    );

  }

}
