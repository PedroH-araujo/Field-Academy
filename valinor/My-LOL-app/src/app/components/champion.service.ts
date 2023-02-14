import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  BaseUrl = 'http://localhost:3000'

  getChampions(offset: number, limit: number){
  return this.http.get<any>(`${this.BaseUrl}/${offset}/${limit}`)
  }

  getChampionDetails(name: string){
    return this.http.get<any>(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${name}.json`)
  }

  findChampion(name: string){
    return this.http.get<any>(`${this.BaseUrl}/${name}`)
  }
}
