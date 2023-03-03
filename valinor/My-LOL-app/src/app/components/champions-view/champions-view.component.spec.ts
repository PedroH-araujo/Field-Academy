import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageEvent } from '@angular/material';
import { ChampionService } from '../shared/champion.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ChampionsViewComponent } from './champions-view.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChampionsViewComponent', () => {
  let component: ChampionsViewComponent;
  let fixture: ComponentFixture<ChampionsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ChampionsViewComponent],
      providers: [{ provide: ChampionService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ChampionsViewComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onPageChange', () => {
    it('makes expected calls', () => {
      const pageEventStub: PageEvent = <any>{};
      const championServiceStub: ChampionService = fixture.debugElement.injector.get(
        ChampionService
      );
      spyOn(championServiceStub, 'getChampions').and.callThrough();
      component.onPageChange(pageEventStub);
      expect(championServiceStub.getChampions).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const championServiceStub: ChampionService = fixture.debugElement.injector.get(
        ChampionService
      );
      spyOn(championServiceStub, 'getChampions').and.callThrough();
      component.ngOnInit();
      expect(championServiceStub.getChampions).toHaveBeenCalled();
    });
  });

  describe('championSearch', () => {

    it('Ao buscar um campeão com valor de busca deve trazer os campeão esperado', () => {
      const championServiceStub: ChampionService = fixture.debugElement.injector.get(
        ChampionService
      );
      fixture.detectChanges();
      spyOn(championServiceStub, 'getChampions').and.callThrough();
      spyOn(championServiceStub, 'findChampion').and.callThrough();
      const componentElement = fixture.nativeElement as HTMLElement
      const searchElement = componentElement.querySelector('[data-test="searchText"]') as HTMLInputElement;
      console.log(searchElement)
      component.searchText.patchValue('test')
      searchElement.dispatchEvent(new Event('change'))
      fixture.detectChanges();

      expect(championServiceStub.findChampion).toHaveBeenCalled()
      expect(championServiceStub.getChampions).not.toHaveBeenCalled()
    })

    it('Ao buscar um campeão com sem valor de busca deve trazer os campeão esperado', () => {
      const championServiceStub: ChampionService = fixture.debugElement.injector.get(
        ChampionService
      );
      fixture.detectChanges();
      spyOn(championServiceStub, 'getChampions').and.callThrough();
      spyOn(championServiceStub, 'findChampion').and.callThrough();
      const searchTextElement = fixture.debugElement.query(By.css('[data-test="searchText"]')).nativeElement as HTMLInputElement;
      searchTextElement.value = ''
      searchTextElement.dispatchEvent(new Event('change'))
      fixture.detectChanges();

      expect(championServiceStub.getChampions).toHaveBeenCalled()
      expect(championServiceStub.findChampion).not.toHaveBeenCalled()
    })
  })
})
