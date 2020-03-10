import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewFilteredComponent } from './post-view-filtered.component';

describe('PostViewFilteredComponent', () => {
  let component: PostViewFilteredComponent;
  let fixture: ComponentFixture<PostViewFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostViewFilteredComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
