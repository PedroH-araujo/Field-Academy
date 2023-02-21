import { TestBed } from '@angular/core/testing';
import { ChampionService } from "./champion.service";
import { HttpClientTestingModule } from '@angular/common/http/testing'

const mockData = {
  api: 'http://localhost:3000/0/10',
  data: [
    {

    }
  ]
}


describe(ChampionService.name, () => {

  let service: ChampionService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChampionService]
    })

    service = TestBed.get(ChampionService)
  })

  it('Should be created', () => {
    expect(service).toBeTruthy()
  })
})

