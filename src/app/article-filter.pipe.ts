import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articles: any[], keyword: string): any[] {
    if (!articles || !keyword) {
      return articles;
    }

    const lowerKeyword = keyword.toLowerCase();

    return articles.filter(article =>
      article.title && article.title.toLowerCase().includes(lowerKeyword) ||
      (article.source && article.source.name && article.source.name.toLowerCase().includes(lowerKeyword)) ||
      (article.Summary && article.Summary.toLowerCase().includes(lowerKeyword))
    );
  }
}
