import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articles:any[],keyword:string): any[] {
    if(!articles || !keyword){
      return articles;
    }

    keyword=keyword.toLowerCase();
    return articles.filter(article=>
      article.title.toLowerCase().includes(keyword)||  article.source.toLowerCase().includes(keyword) ||  article.Summary.toLowerCase().includes(keyword)
    );
  }

}
