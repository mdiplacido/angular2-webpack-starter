/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostsGridComponent } from './posts-grid.component';

describe('PostsGridComponent', () => {
  let component: PostsGridComponent;
  let fixture: ComponentFixture<PostsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});