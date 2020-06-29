import { Component, OnInit, ViewChild } from '@angular/core';
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
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showForm: boolean = false;
  @ViewChild('userForm') form: any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.enabledAdd = true;
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
      this.loaded = true;
    }, 3000);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is Invalid');
    } else {
      value.isActive = true;
      value.register = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
