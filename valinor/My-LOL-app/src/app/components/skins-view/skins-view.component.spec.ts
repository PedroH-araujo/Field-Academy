import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChampionService } from '../shared/champion.service';
import { SkinsViewComponent } from './skins-view.component';

describe('SkinsViewComponent', () => {
  let component: SkinsViewComponent;
  let fixture: ComponentFixture<SkinsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SkinsViewComponent ],
      providers: [{ provide: ChampionService }]
    });
    fixture = TestBed.createComponent(SkinsViewComponent);
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
});
