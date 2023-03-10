import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  listUrl = 'http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json'

  getChampions(){
  return this.http.get<any>(this.listUrl)
  }

  getChampionDetails(name: string){
    return this.http.get<any>(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${name}.json`)
  }
}
