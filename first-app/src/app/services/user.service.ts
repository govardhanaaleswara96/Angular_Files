import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() {
    this.users = [
      {
        firstName: 'Govardhan',
        lastName: 'Aaleswara',
        email: 'Goabala88@gmail.com',
        isActive: true,
        register: new Date('03/11/2020 06:20:00'),
        hide: true,
      },
      {
        firstName: 'yugander',
        lastName: 'Aaleswara',
        email: 'Goabala@gmail.com',
        isActive: false,
        register: new Date('03/11/2020 06:20:00'),
        hide: true,
      },
      {
        firstName: 'balaji',
        lastName: 'Aaleswara',
        email: 'Goa@gmail.com',
        isActive: true,
        register: new Date('03/11/2020 06:20:00'),
        hide: true,
      },
    ];
  }
  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'Brad' });
      }, 4000);
    });

    return this.data;
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
