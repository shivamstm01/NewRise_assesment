import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Service/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string = '';
  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      data => {
        this.articles = data.articles;  
      },
      error => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
