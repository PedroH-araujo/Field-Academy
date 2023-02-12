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
  getIndex1: number = 0
  getIndex2: number = 10

  ngOnInit() {
    this.championsService.getChampions().subscribe(champions => {
      this.championList = Object.values(champions.data)
      this.championList5 = this.championList.slice(0,10)
    })
  }

  length = 50;
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
    this.championsService.getChampions().subscribe(champions => {
      this.championList = Object.values(champions.data)
      this.championList5 = this.championList.slice(this.getIndex1,this.getIndex2)
    })
  }
}
