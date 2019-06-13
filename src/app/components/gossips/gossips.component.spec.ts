import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipsComponent } from './gossips.component';

describe('GossipsComponent', () => {
  let component: GossipsComponent;
  let fixture: ComponentFixture<GossipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
