import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5043/api/user';

  getUsers() {
    return axios.get<User[]>(this.apiUrl);
  }

  addUser(user: User) {
    return axios.post<User>(this.apiUrl, user);
  }
}
