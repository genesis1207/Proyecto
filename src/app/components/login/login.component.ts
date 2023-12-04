import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myfa!: FormGroup;
  resultado!: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {

    this.myfa = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.myfa.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/logueado'])
      })
      .catch(error => console.log(error));
  }
}