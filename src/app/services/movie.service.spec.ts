import { MovieComponent } from './../components/movie/movie.component';
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { Movie } from '../model/movie';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { of } from 'rxjs';
import { HomeComponent } from '../components/home/home.component';
import { MatDialog } from '@angular/material/dialog';

describe('MovieService', () => {
  let service: MovieService;
  let movieComp:MovieComponent;
  let homeComponent:HomeComponent;
  let movieObj:Movie;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HomeComponent,MovieComponent],
      imports:
      [
        HttpClientTestingModule,
        HttpClientModule,
        MatDialog
      ],providers:[HomeComponent,MovieService,MovieComponent,MatDialog]

    });
    service = TestBed.inject(MovieService);
    movieComp=TestBed.inject(MovieComponent);
    homeComponent=TestBed.inject(HomeComponent)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get() from service',()=>{
    let response:Movie[]|any;
    let spy=spyOn(service,'getAllMovie').and.returnValue(of(response));
    expect(homeComponent.getAllMovie()).toEqual(response);
  })
});
