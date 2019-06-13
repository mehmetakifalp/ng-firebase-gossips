import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipListComponent } from './gossip-list.component';

describe('GossipListComponent', () => {
  let component: GossipListComponent;
  let fixture: ComponentFixture<GossipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
