import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Blog } from '../modelsBlog/blog';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

    private url:string="http://localhost:8001/api/v1/blog";
  
    constructor(
     private http:HttpClient
     ) { }

     // Llamar a todos los blogs
     getAll():Observable<Blog[]>{
       return this.http.get<Blog[]>(this.url);
     }

     //crear un blogs
     create(blog:Blog):Observable<Blog>{
      return this.http.post<Blog>(this.url, blog);
     }

     // Obtener un blog
     get(id:number):Observable<Blog>{
       return this.http.get<Blog>(this.url+'/'+id);
     }

     //Editar
     update(blog:Blog):Observable<Blog>{
      return this.http.put<Blog>(this.url, blog)
     }

     //eliminar un blog
     delete(id:number):Observable<Blog>{
      return this.http.delete<Blog>(this.url+'/'+id);
    }
  


}