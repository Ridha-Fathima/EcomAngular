import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  isSpinning: boolean = false;

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }

    return {};
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmValidator]],
    });
  }

  register() {
    console.log('form data: ', this.validateForm.value);
    this.authService.register(this.validateForm.value).subscribe((res) => {
      console.log('Response on register: ', res);
      this.notification.success('SUCCESS', 'User Registered Successfully', {
        nzDuration: 5000,
      });
      
    });
  }
}