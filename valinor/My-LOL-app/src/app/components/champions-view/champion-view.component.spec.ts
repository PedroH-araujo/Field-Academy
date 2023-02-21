import { ChampionService } from './../champion.service';
import { AppModule } from './../../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsViewComponent } from './champions-view.component';

fdescribe(ChampionsViewComponent.name, () => {
  let fixture: ComponentFixture<ChampionsViewComponent>
  let component: ChampionsViewComponent
  let championService: ChampionService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents()

    fixture = TestBed.createComponent(ChampionsViewComponent)
    component = fixture.componentInstance
  })


  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should increment the page index in URL', () => {
    fixture.detectChanges()
  })

})
