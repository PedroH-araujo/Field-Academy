import { PageEvent } from '@angular/material';
import { Champion } from './../champion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionService } from './../champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skins-view',
  templateUrl: './skins-view.component.html',
  styleUrls: ['./skins-view.component.css']
})
export class SkinsViewComponent implements OnInit {

  constructor(private championsService: ChampionService, private route: ActivatedRoute, private router: Router) { }

  searchNode: boolean = true
  championList5: Champion[] = []
  championSearchList: Champion[] = []
  getIndex1: number = 0
  getIndex2: number = 10
  pagina: number = 0

  ngOnInit() {
    this.championsService.getChampions(0, 1).subscribe(champions => {
      this.championList5 = champions
      this.pageLength = 162
      console.log(champions[0])
    })
    for (let i = 1; i <= 162; i++) {
      this.pageSizeOptions1.push(i)
    }
  }

  indexPageParam() {
    this.router.navigate(['/skins'],
      { queryParams: { 'page': this.pageIndex + 1 } }
    )
  }

  pageLength = 162
  pageSize = 1;
  pageIndex = 0;
  pageSizeOptions1: number[] = [];

  pageEvent: PageEvent = new PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getIndex1 = this.pageSizeOptions1[this.pageIndex]

    this.indexPageParam()

    if (this.searchNode) {
      this.championsService.getChampions(this.getIndex1, this.getIndex1).subscribe(champions => {
        this.championList5 = champions
        console.log(champions)
        console.log(this.getIndex1)
      })
    } else {
      this.championList5 = this.championSearchList.slice(this.getIndex1 - 1, this.getIndex1)
      console.log(this.championList5)
    }
  }

  championSearch(event: Event) {
    let target = event.target as HTMLButtonElement

    let inputText = target.value

    if (inputText == '') {
      this.championsService.getChampions(0, 1).subscribe(champions => {
        this.championList5 = champions
        this.pageLength = 162
        this.searchNode = true
        this.pageIndex = 0
      })
    } else {
      this.pageIndex = 0
      this.indexPageParam()
      this.championsService.findChampion(inputText).subscribe(champions => {
        this.championSearchList = champions
        console.log(champions)
        this.championList5 = this.championSearchList.slice(0, 1)
        this.pageLength = this.championSearchList.length
        this.searchNode = false
      })
    }
  }
}
