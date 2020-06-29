import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      country: '',
    },
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showForm: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.enabledAdd = true;
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
          isActive: true,
          register: new Date('03/11/2020 06:20:00'),
          hide: true,
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
          isActive: false,
          register: new Date('03/11/2020 06:20:00'),
          hide: true,
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
          isActive: true,
          register: new Date('03/11/2020 06:20:00'),
          hide: true,
        },
      ];
      this.loaded = true;
    }, 3000);
  }
  addUser() {
    this.user.isActive = true;
    (this.user.register = new Date('03/11/2020 06:20:00')),
      this.users.unshift(this.user);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
}
