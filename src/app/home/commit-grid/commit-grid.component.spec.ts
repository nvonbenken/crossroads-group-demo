import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitGridComponent } from './commit-grid.component';

describe('CommitGridComponent', () => {
  let component: CommitGridComponent;
  let fixture: ComponentFixture<CommitGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
