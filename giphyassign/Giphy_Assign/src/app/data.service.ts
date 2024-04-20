// import { Injectable } from '@angular/core';
// import { environment } from "../environments/environment";
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   gifs = new BehaviorSubject<any>([]);

//   constructor(private http: HttpClient) { }

//   getTrendingGif(){
//     return this.http.get(`https:/api.giphy.com/v1/gifs/trending?api_key=%${environment.giphyApiKey}&limit=50`)
//     .subscribe((response:any)=>{
//       // console.log('Data', response);
//       this.gifs.next(response.data)
//     })
//   }

//   searchGifs(gifName: string){
//     return this.http.get(`https://api.giphy.com/v1/gifs/search?q=%${gifName}&api_key=%${environment.giphyApiKey}&limit=50`)
//     .subscribe((response:any)=>{
//       // console.log('Data', response);
//       this.gifs.next(response.data)
//     })
//   }
//   getGifs(){
//     return this.gifs.asObservable();
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
   gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrendingGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any)=>{
      this.gifs.next(response.data);
    })
  }

  searchGifs(gifName: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any)=>{
      this.gifs.next(response.data);
    })
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}

