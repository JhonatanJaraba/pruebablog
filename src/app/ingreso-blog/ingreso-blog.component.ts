import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../modelsBlog/blog';
import { BlogService } from '../ServicioBlog/Servicioblog';

@Component({
  selector: 'app-ingreso-blog',
  templateUrl: './ingreso-blog.component.html',
  styleUrls: ['./ingreso-blog.component.css']
})
export class IngresoBlogComponent implements OnInit {
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

  create():void{
      console.log(this.blog);
      this.blogService.create(this.blog).subscribe(
        res=>this.router.navigate(['/blogs'])
      );
  }

  update():void{
    this.blogService.update(this.blog).subscribe(
      res=>this.router.navigate(['/blogs'])
      
    );
  }

}
