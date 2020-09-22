import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionBannerComponent } from './suscription-banner.component';

describe('SuscriptionBannerComponent', () => {
  let component: SuscriptionBannerComponent;
  let fixture: ComponentFixture<SuscriptionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
