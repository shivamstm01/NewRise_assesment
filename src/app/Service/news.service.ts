import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient){}

  getArticles(){
    return [ {title: 'Sports', source:'News Channal', PublicationDate:'2024/07/08',Summary:'“You electrified the entire automobile industry. I’m serious. You led, and it matters".'},
      {title: 'influence on tech earnings', source:'Social  Media', PublicationDate:'2024/04/08',Summary:' "Though theyre not based in the U.S., Temu and Shein have captured the attention of Wall Street because of their potential impact on U.S. tech companies.'},
      {title: 'bitcoin ', source:'Magazine', PublicationDate:'2024/05/08', Summary:'"Former presidents crypto conversion a classic Trumpian transactional relationship, partly driven by ego-boosting NFTs"'}];
  }

 

}
