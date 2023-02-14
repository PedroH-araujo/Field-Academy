import { ChampionService } from './../champion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route:ActivatedRoute, private championService: ChampionService) { }

  champObject: any = {}
  skill = 'none'


  ngOnInit(): void {
    const name: any = this.route.snapshot.paramMap.get('name')
    // console.log(name)
    this.championService.getChampionDetails(name).subscribe(champ => {
      console.log(champ)
      // console.log(Object.entries(champ.data)[0][1])
      // this.champObject = Object.entries(champ.data)[0][1]
    })
  }

  showSkillDescription(event: any){
    this.skill = event
  }

}
