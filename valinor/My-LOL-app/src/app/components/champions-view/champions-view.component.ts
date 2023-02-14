import { PageEvent } from '@angular/material';
import { ChampionService } from './../champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-view',
  templateUrl: './champions-view.component.html',
  styleUrls: ['./champions-view.component.css']
})
export class ChampionsViewComponent implements OnInit {

  constructor(private championsService: ChampionService) { }

  championList: any = []
  championList5: any = []
  championSearchList: any = []
  getIndex1: number = 0
  getIndex2: number = 10
  matTooltipPosition = 'above'

  ngOnInit() {
    this.championsService.getChampions(0,10).subscribe(champions => {
      this.championList5 = champions
      console.log(champions)
      this.pageLength = 162
    })
  }

  pageLength = 0
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
  pageSizeOptions2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 162];

  pageEvent: PageEvent = new PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getIndex1 = this.pageSizeOptions1[this.pageIndex]
    this.getIndex2 = this.pageSizeOptions2[this.pageIndex]


    console.log(e.length)
    if(this.championSearchList == ''){
      this.championsService.getChampions(this.getIndex1,this.getIndex2).subscribe(champions => {
        this.championList5 = champions
      })
    } else {
      this.championList5 = this.championSearchList.slice(this.getIndex1,this.getIndex2)
    }

  }

  championSearch(event: any){
    let inputText = event.target.value

    if(inputText == ''){
      this.championsService.getChampions(0,10).subscribe(champions => {
        this.championList5 = champions
        this.pageLength = 162
        console.log(champions)
      })
    }
    this.championsService.findChampion(inputText).subscribe(champions => {
      console.log(champions)
      this.championSearchList = champions
      this.championList5 = this.championSearchList.slice(this.getIndex1,this.getIndex2)
    })
  }
}
