import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Govardhan',
        lastName: 'Aaleswara',
        age: 23,
        address: {
          street: '102 katchur main road',
          city: 'Chennai',
          country: 'India',
        },
      },
      {
        firstName: 'yugander',
        lastName: 'Aaleswara',
        age: 24,
        address: {
          street: '102 katchur main road',
          city: 'Chennai',
          country: 'India',
        },
      },
      {
        firstName: 'balaji',
        lastName: 'Aaleswara',
        age: 50,
        address: {
          street: '102 katchur main road',
          city: 'Chennai',
          country: 'India',
        },
      },
    ];
    this.addUser({
      firstName: 'Gaythri',
      lastName: 'Aaleswara',
      age: 50,
      address: {
        street: '102 katchur main road',
        city: 'Chennai',
        country: 'India',
      },
    });
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
