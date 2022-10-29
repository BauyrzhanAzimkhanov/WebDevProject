import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment, AuthToken } from './models';
import {Observable, of} from 'rxjs';
import {map} from "rxjs/operators";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  option = new HttpHeaders({'Content-Type': 'application/json'});
  BASIC_URL: string;

  constructor(private client: HttpClient) {
    this.BASIC_URL = 'http://127.0.0.1:8000';
  }

  async login(username: string, password: string) {
    
    const res = await axios.post(`${this.BASIC_URL}/api/login/`, {username, password});

    return res.data.token;
    // return (this.client.post<AuthToken>(,{
    //     username,
    //     password
    // }));
  }
}
