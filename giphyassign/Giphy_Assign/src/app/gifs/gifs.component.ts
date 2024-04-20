import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  
    gifs: any[]=[];
    subscription!: Subscription;
  constructor(private dataService : DataService) { }
 

  ngOnInit(): void {
    this.dataService.getTrendingGif()
    this.subscription = this.dataService.getGifs()
    .subscribe((response:any)=>{
      console.log('Data', response);
      this.gifs = response;
    })
  
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
