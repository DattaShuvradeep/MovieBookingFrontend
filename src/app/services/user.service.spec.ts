import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { LoginComponent } from '../components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../components/home/home.component';
import { MovieComponent } from '../components/movie/movie.component';
import { MovieService } from './movie.service';

describe('UserService', () => {
  let service: UserService;
  let component:LoginComponent;
  let obj:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[LoginComponent,UserService],
      imports:
      [
        HttpClientTestingModule,
        HttpClientModule
      ],providers:[LoginComponent,UserService]

    });
    service = TestBed.inject(UserService);
    component=TestBed.inject(LoginComponent)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
