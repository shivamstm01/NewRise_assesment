import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Service/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
  keyword:string='';
  
  articles:any[]=[];
  filteredArticles:any[]=[];

  constructor(private http:NewsService){}


  ngOnInit():void{
    this.articles=this.http.getArticles();
    this.filteredArticles=this.articles;
console.warn(this.filteredArticles);

  }
 

}
