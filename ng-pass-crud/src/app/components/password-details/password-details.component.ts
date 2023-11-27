import { Component, Input, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'app-password-details',
  templateUrl: './password-details.component.html',
  styleUrls: ['./password-details.component.css']
})
export class PasswordDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPassword: Password = {
    company: '',
    user: '',
    password: '',
    published: false
  };
  
  message = '';

  constructor(
    private passwordService: PasswordService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPassword(this.route.snapshot.params["id"]);
    }
  }

  getPassword(id: string): void {
    this.passwordService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPassword = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      company: this.currentPassword.company,
      user: this.currentPassword.user,
      password: this.currentPassword.password,
      published: status
    };

    this.message = '';

    this.passwordService.update(this.currentPassword.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPassword.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updatePassword(): void {
    this.message = '';

    this.passwordService.update(this.currentPassword.id, this.currentPassword)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This password was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePassword(): void {
    this.passwordService.delete(this.currentPassword.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/passwords']);
        },
        error: (e) => console.error(e)
      });
  }

}