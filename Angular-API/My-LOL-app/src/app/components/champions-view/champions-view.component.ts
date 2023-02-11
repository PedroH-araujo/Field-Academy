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


  ngOnInit() {
    this.championsService.getChampions().subscribe(champions => {
      this.championList = Object.values(champions.data)
      this.championList5 = this.championList.slice(0,10)
    })
  }

}
