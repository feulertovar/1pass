import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/models/password.model';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})
export class AddPasswordComponent implements OnInit {

  password: Password = {
    company: '',
    user: '',
    password: '',
    published: false
  };
  submitted = false;

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  savePassword(): void {
    const data = {
      company: this.password.company,
      user: this.password.user,
      password: this.password.password
      
    };

    this.passwordService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPassword(): void {
    this.submitted = false;
    this.password = {
      company: '',
      user: '',
      password: '',
      published: false
    };
  }

}
