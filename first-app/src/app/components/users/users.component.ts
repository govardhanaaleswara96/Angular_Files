import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.enabledAdd = true;
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
        this.loaded = true;
      });
      this.loaded = true;
      this.userService.getData().subscribe((data) => {
        console.log(data);
      });
    }, 3000);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is Invalid');
    } else {
      value.isActive = true;
      value.register = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
