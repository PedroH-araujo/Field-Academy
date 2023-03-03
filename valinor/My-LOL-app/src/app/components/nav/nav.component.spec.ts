import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionService } from '../shared/champion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule ],
      declarations: [NavComponent],
      providers: [
        { provide: ChampionService },
      ]
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const championServiceStub: ChampionService = fixture.debugElement.injector.get(
        ChampionService
      );
      spyOn(championServiceStub, 'findChampion').and.callThrough();
      component.ngOnInit();
      expect(championServiceStub.findChampion).toHaveBeenCalled();
    });
  });
});
