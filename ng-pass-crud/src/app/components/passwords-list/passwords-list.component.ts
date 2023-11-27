import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/models/password.model';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.css']
})
export class PasswordsListComponent implements OnInit {

  passwords?: Password[];
  currentPassword: Password = {};
  currentIndex = -1;
  company = '';

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.retrievePasswords();
  }

  retrievePasswords(): void {
    this.passwordService.getAll()
      .subscribe({
        next: (data) => {
          this.passwords = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePasswords();
    this.currentPassword = {};
    this.currentIndex = -1;
  }

  setActivePassword(password: Password, index: number): void {
    this.currentPassword = password;
    this.currentIndex = index;
  }

  removeAllPasswords(): void {
    this.passwordService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchCompany(): void {
    this.currentPassword = {};
    this.currentIndex = -1;

    this.passwordService.findByCompany(this.company)
      .subscribe({
        next: (data) => {
          this.passwords = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
